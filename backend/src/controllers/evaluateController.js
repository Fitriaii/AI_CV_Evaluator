import prisma from "../config/prisma.js";
import { ChromaClient } from "chromadb";
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

const chroma = new ChromaClient({
  path: process.env.CHROMA_URL || "http://localhost:8000",
  settings: { allowReset: true },
});

async function generateEmbedding(text) {
  if (!text || text.trim().length === 0) {
    return Array.from({ length: 256 }, () => Math.random() * 2 - 1);
  }

  try {
    const response = await openai.chat.completions.create({
      model: "mistralai/mistral-nemo",
      messages: [
        {
          role: "system",
          content:
            "You are an AI model that converts text into numerical embeddings. " +
            "Return ONLY a JSON array of 256 numbers. No explanation, no text.",
        },
        { role: "user", content: `Text: """${text.slice(0, 500)}"""` },
      ],
      temperature: 0,
      max_tokens: 400,
    });

    const raw = response.choices?.[0]?.message?.content?.trim() || "";
    const match = raw.match(/\[([\s\S]*?)\]/);

    if (match) {
      const parsed = JSON.parse(match[0]);
      if (Array.isArray(parsed)) return parsed;
    }

    return Array.from({ length: 256 }, () => Math.random() * 2 - 1);
  } catch {
    return Array.from({ length: 256 }, () => Math.random() * 2 - 1);
  }
}

export const evaluateUser = async (req, res) => {
  try {
    const { cvId, projectId } = req.body;
    if (!cvId || !projectId) {
      return res.status(400).json({ message: "CV ID and Project ID are required" });
    }

    const jobId = `job_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    const cv = await prisma.cV.findUnique({ where: { id: Number(cvId) } });
    const project = await prisma.project.findUnique({ where: { id: Number(projectId) } });

    if (!cv || !project) {
      return res.status(404).json({ message: "CV atau Project tidak ditemukan." });
    }

    const refCollection = await chroma.getOrCreateCollection({ name: "reference_docs" });

    const cvEmbedding = await generateEmbedding(cv.textContent);
    const projEmbedding = await generateEmbedding(project.textContent);

    const jobRefs = await refCollection.query({ queryEmbeddings: [cvEmbedding], nResults: 1 });
    const caseRef = await refCollection.query({ queryEmbeddings: [projEmbedding], nResults: 1 });

    const jobDesc = jobRefs?.documents?.[0]?.[0] || "No reference job description found.";
    const caseStudy = caseRef?.documents?.[0]?.[0] || "No reference case study found.";

    const prompt = `
You are an AI evaluator assessing a candidate’s CV and Project Report.

Reference Job Description:
${jobDesc}

Reference Case Study:
${caseStudy}

Candidate CV:
${cv.textContent}

Candidate Project Report:
${project.textContent}

Provide a detailed evaluation in strict JSON format as follows:
{
  "cv_match_rate": number (0-1),
  "cv_feedback": string,
  "project_score": number (0-5),
  "project_feedback": string,
  "overall_summary": string
}
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are an expert technical recruiter and evaluator." },
        { role: "user", content: prompt },
      ],
    });

    const rawResponse = completion.choices?.[0]?.message?.content?.trim() || "";
    let evaluationData;

    try {
      evaluationData = JSON.parse(rawResponse);
    } catch {
      const match = rawResponse.match(/\{[\s\S]*\}/);
      evaluationData = match ? JSON.parse(match[0]) : {
        cv_match_rate: 0,
        cv_feedback: "Failed to parse AI response",
        project_score: 0,
        project_feedback: "Failed to parse AI response",
        overall_summary: "Failed to parse AI response",
      };
    }

    await prisma.evaluation.create({
      data: {
        cvId: cv.id,
        projectId: project.id,
        rawResponse: rawResponse,
        cv_match_rate: evaluationData.cv_match_rate,
        cv_feedback: evaluationData.cv_feedback,
        project_score: evaluationData.project_score,
        project_feedback: evaluationData.project_feedback,
        overall_summary: evaluationData.overall_summary,
      },
    });

    res.status(200).json({
      jobId,
      status: "completed",
      evaluation: evaluationData,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

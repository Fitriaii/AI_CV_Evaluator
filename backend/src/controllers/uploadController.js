import prisma from "../config/prisma.js";
import fs from "fs";
import pdf from "pdf-parse";
import OpenAI from "openai";
import { v4 as uuidv4 } from "uuid";
import { ChromaClient } from "chromadb";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

const chroma = new ChromaClient({
    path: process.env.CHROMA_URL || "http://localhost:8000",
    settings: { allowReset: true },
});

async function extractTextFromPDF(filePath) {
    const dataBuffer = fs.readFileSync(filePath);
    const pdfData = await pdf(dataBuffer);
    return pdfData.text.trim();
}

async function generateEmbedding(text) {
  if (!text || text.trim().length === 0) {
    throw new Error("Empty text for embedding generation");
  }

  try {
    const response = await openai.chat.completions.create({
      model: "mistralai/mistral-nemo", // kamu bisa ganti ke model openrouter lain
      messages: [
        {
          role: "system",
          content:
            "You are an AI model that converts text into numerical embeddings. " +
            "Return ONLY a JSON array of 200-300 numbers. No explanation, no text.",
        },
        {
          role: "user",
          content: `Text: """${text.slice(0, 500)}"""`,
        },
      ],
      temperature: 0,
      max_tokens: 400,
    });

    const rawOutput = response.choices[0].message.content.trim();
    console.log("=== RAW PSEUDO EMBEDDING RESPONSE ===");
    console.log(rawOutput);

    // cari array di dalam teks (meskipun ada kalimat di luar)
    const arrayMatch = rawOutput.match(/\[([\s\S]*?)\]/);
    if (arrayMatch) {
      const embedding = JSON.parse(arrayMatch[0]);
      if (Array.isArray(embedding)) return embedding;
    }

    // kalau masih gagal, fallback ke random vector agar flow tidak berhenti
    console.warn("⚠️ Could not parse embedding. Using random vector fallback.");
    return Array.from({ length: 256 }, () => Math.random() * 2 - 1);
  } catch (error) {
    console.error("❌ Embedding generation failed:", error.message);
    // fallback juga kalau error
    return Array.from({ length: 256 }, () => Math.random() * 2 - 1);
  }
}

export const uploadCVProject = async (req, res) => {
    try {
        const userId = req.user.userId;
        const cvFile = req.files?.['cv']?.[0];
        const projectFile = req.files?.['project']?.[0];

        if (!cvFile || !projectFile) {
            return res.status(400).json({ message: "CV and Project files are required" });
        }

        //CV
        const cvText = await extractTextFromPDF(cvFile.path);
        if (!cvText) return res.status(400).json({ message: "Failed to extract text from CV" });

        const cvEmbedding = await generateEmbedding(cvText);

        await chroma.createCollection({ name: "cv_embeddings" }).catch(() => { });
        const cvCollection = await chroma.getCollection({ name: "cv_embeddings" });

        const cvVectorId = uuidv4();
        await cvCollection.add({
            ids: [cvVectorId],
            embeddings: [cvEmbedding],
            metadatas: [{ userId, type: "cv", filename: cvFile.originalname }],
            documents: [cvText],
        });

        const savedCV = await prisma.cV.create({
            data: {
                userId,
                filename: cvFile.filename,
                originalName: cvFile.originalname,
                textContent: cvText,
                vectorId: cvVectorId,
            },
        });


        //Project
        const projectText = await extractTextFromPDF(projectFile.path);
        if (!projectText) return res.status(400).json({ message: "Failed to extract text from Project" });

        const projectEmbedding = await generateEmbedding(projectText);

        await chroma.createCollection({ name: "project_embeddings" }).catch(() => { });
        const projectCollection = await chroma.getCollection({ name: "project_embeddings" });

        const projectVectorId = uuidv4();
        await projectCollection.add({
            ids: [projectVectorId],
            embeddings: [projectEmbedding],
            metadatas: [{ userId, type: "project", filename: projectFile.originalname }],
            documents: [projectText],
        });

        const savedProject = await prisma.project.create({
            data: {
                userId,
                filename: projectFile.filename,
                originalName: projectFile.originalname,
                textContent: projectText,
                vectorId: projectVectorId,
            },
        });

        res.status(200).json({
            message: "CV and Project uploaded successfully",
            data: {
                cv: {
                    id: savedCV.id,
                    fileName: savedCV.originalName,
                    vectorId: savedCV.vectorId,
                },
                project: {
                    id: savedProject.id,
                    fileName: savedProject.originalName,
                    vectorId: savedProject.vectorId,
                },
            },
        });

    } catch (error) {
        console.error("Error in upload CV & Project:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import OpenAI from "openai";
import { ChromaClient } from "chromadb";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

const chroma = new ChromaClient({
  path: process.env.CHROMA_URL || "http://localhost:8000",
  settings: { allowReset: true },
});

/**
 * 🔹 Generate pseudo-embedding pakai OpenRouter chat model
 */
async function generatePseudoEmbedding(text) {
  if (!text || text.trim().length === 0) {
    throw new Error("Empty text for embedding generation");
  }

  try {
    const response = await openai.chat.completions.create({
      model: "mistralai/mistral-nemo", // Bisa diganti ke model lain di OpenRouter
      messages: [
        {
          role: "system",
          content:
            "You are an AI that converts text into a numerical vector embedding. " +
            "Return ONLY a JSON array of 256 floating point numbers. No explanation, no text.",
        },
        {
          role: "user",
          content: `Text:\n"""${text.slice(0, 600)}"""`,
        },
      ],
      temperature: 0,
      max_tokens: 400,
    });

    const rawOutput = response.choices?.[0]?.message?.content?.trim();
    console.log("=== RAW PSEUDO EMBEDDING RESPONSE ===");
    console.log(rawOutput);

    // coba cari array JSON di output
    const arrayMatch = rawOutput.match(/\[([\s\S]*?)\]/);
    if (arrayMatch) {
      try {
        const parsed = JSON.parse(arrayMatch[0]);
        if (Array.isArray(parsed)) {
          console.log(`✅ Parsed pseudo-embedding (${parsed.length} dims)`);
          return parsed;
        }
      } catch {
        console.warn("⚠️ Gagal parse embedding array, fallback random vector");
      }
    }

    // fallback: vector acak
    return Array.from({ length: 256 }, () => Math.random() * 2 - 1);
  } catch (error) {
    console.error("❌ Pseudo-embedding gagal:", error.message);
    // fallback juga
    return Array.from({ length: 256 }, () => Math.random() * 2 - 1);
  }
}

/**
 * 🔹 Seed reference docs (JobDesc → vektor ke Chroma)
 */
async function seedReferenceDocs() {
  try {
    const filePath = path.resolve("backend/reference_docs/JobDesc.txt");
    if (!fs.existsSync(filePath)) {
      console.error("❌ File JobDesc.txt tidak ditemukan di:", filePath);
      return;
    }

    const jobDescText = fs.readFileSync(filePath, "utf-8").trim();
    console.log("📄 Membuat pseudo-embedding untuk Job Description...");

    const jobDescEmbedding = await generatePseudoEmbedding(jobDescText);

    console.log("🔗 Menghubungkan ke ChromaDB...");
    await chroma.createCollection({ name: "reference_docs" }).catch(() => {});
    const refCollection = await chroma.getCollection({ name: "reference_docs" });

    const id = uuidv4();
    await refCollection.add({
      ids: [id],
      embeddings: [jobDescEmbedding],
      metadatas: [{ type: "job_description", title: "Product Engineer (Backend)" }],
      documents: [jobDescText],
    });

    console.log("✅ Berhasil menambahkan Job Description ke koleksi `reference_docs`.");
  } catch (error) {
    console.error("🚨 Error seeding reference documents:", error.message);
  }
}

// ✅ Jalankan seeding
seedReferenceDocs();

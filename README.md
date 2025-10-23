# AI CV Evaluator - Backend

Backend API untuk aplikasi **AI CV Evaluator**, yang menilai kesesuaian kandidat berdasarkan CV dan laporan proyek menggunakan AI.

---

## Fitur Backend

- **Authentication**: Register & Login menggunakan JWT
- **Upload CV & Project Report** (PDF/TXT)
- **Evaluate Candidate** dengan AI:
  - CV Match Score
  - Project Score
  - Strengths & Weaknesses
  - Suggestion & Summary
- Menyimpan hasil evaluasi di database melalui **Prisma ORM**
- Endpoint RESTful dengan prefix `/api`

---

## Teknologi yang digunakan 

- Node.js & Express.js
- Prisma ORM
- OpenAI / OpenRouter API untuk AI evaluation
- ChromaDB untuk embeddings
- JWT untuk authentication
- CORS support untuk frontend development (masa pengembangan)

---

## Struktur Project
```text
AI_CV_Evaluator/
│
├─ backend/
│   ├─ generated/                   # Folder hasil build Prisma
│   ├─ prisma/
│   │   ├─ migrations/              # Folder migrasi database
│   │   └─ schema.prisma            # Skema database Prisma
│   ├─ reference_docs/              # Dokumen referensi untuk evaluasi
│   ├─ src/
│   │   ├─ config/
│   │   │   └─ prisma.js            # Prisma client config
│   │   ├─ controllers/
│   │   │   ├─ authController.js
│   │   │   ├─ evaluateController.js
│   │   │   └─ uploadController.js
│   │   ├─ middlewares/             # Middleware Express (JWT, error handling)
│   │   └─ routes/
│   │       ├─ authRoute.js
│   │       ├─ evaluateRoute.js
│   │       └─ uploadRoute.js
│   ├─ scripts/
│   │   └─ seedReferenceDocs.js     # Script untuk seed dokumen referensi
│   ├─ index.js                      # Entry point backend
│   └─ uploads/                      # Folder untuk menyimpan file CV & project yang diupload
│
├─ chromadb-data/                    # Data ChromaDB
│   ├─ <uuid-folder>/
│   └─ chroma.sqlite3
│
├─ node_modules/
├─ .env
├─ .gitignore
├─ package-lock.json
└─ package.json

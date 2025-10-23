import express from "express";
import authRoutes from "./routes/authRoute.js";
import uploadRoute from "./routes/uploadRoute.js";
import evaluateRoute from "./routes/evaluateRoute.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({path: '.env' });
const app = express();
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use("/auth", authRoutes);
app.use("/cvProject", uploadRoute);
app.use("/evl", evaluateRoute);

app.get("/", (req, res) => {
  res.send("✅ AI Resume Reviewer Backend is running!");
});

const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log("JWT_SECRET:", process.env.JWT_SECRET ? "Loaded" : "Missing");
});


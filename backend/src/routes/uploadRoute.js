import express from "express";
import { uploadCVProject } from "../controllers/uploadController.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import upload from "../middlewares/uploadCVProject.js";

const router = express.Router();

router.post(
    "/upload",
    verifyToken,
    upload.fields([
        { name: "cv", maxCount: 1 },
        { name: "project", maxCount: 1 },
    ]),
    uploadCVProject
);

export default router;

import express from "express";
import { evaluateUser } from "../controllers/evaluateController.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/evaluate", verifyToken, evaluateUser);

export default router;

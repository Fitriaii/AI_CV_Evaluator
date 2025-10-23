import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../config/prisma.js";
import dotenv from "dotenv";

dotenv.config({ path: '.env' });
const JWT_SECRET = process.env.JWT_SECRET;


// User Registration

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists!" });
        }

        //pw
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await prisma.user.create({
            data: { name, email, password: hashedPassword },
        });

        res.status(201).json({ message: "User registered successfully!", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// User Login

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials!" });
        }

        //verif
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials!" });
        }

        //token
        if (!JWT_SECRET) {
            console.error("❌ JWT_SECRET tidak terdefinisi di authController");
            return res.status(500).json({ message: "Server error: JWT_SECRET undefined" });
        }

        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });

        res.json({
            message: "Login successful!",
            token,
            user: { id: user.id, name: user.name, email: user.email },
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

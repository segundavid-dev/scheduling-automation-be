import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./modules/auth/auth.routes.js";
import { prisma } from "./utils/prisma.js";

// instanciate express app
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use("/api/v1", authRoutes);

app.get("/", (req, res) => {
  res.send("Express project with typescript");
  console.log("scheduling automation app");
});

export default app;

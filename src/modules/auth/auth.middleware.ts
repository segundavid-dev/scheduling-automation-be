import jwt from "jsonwebtoken";
import "dotenv/config";
import type { Request, Response, NextFunction } from "express";

export function authorizeRequest(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  const secret = process.env.JWT_SECRET;

  if (
    !authHeader ||
    typeof authHeader !== "string" ||
    !authHeader.startsWith("Bearer")
  ) {
    return res.status(401).json({ message: "unauthorized" });
  }

  if (!token || !secret) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, secret);
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
}

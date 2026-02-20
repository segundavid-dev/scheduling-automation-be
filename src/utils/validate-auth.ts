import z from "zod";
import type { Request, Response, NextFunction } from "express";

export default function validateAuth(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  // create required schema
  const schema = z.object({
    email: z.string().email("Invalid email format"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Z]/, "Must contain at least one uppercase letter")
      .regex(/[0-9]/, "Must contain at least one number"),
  });

  try {
    schema.parse(req.body);
    next();
  } catch {
    return res.status(400).json({ message: "Invalid input" });
  }
}

import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

const VerifyJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorize access" });
  }
  const token = authHeader?.split(" ")[1] as string;
  try {
    const decoded = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET as string
    );
    req.decoded = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Forbidden access" });
  }
};

export default VerifyJWT;

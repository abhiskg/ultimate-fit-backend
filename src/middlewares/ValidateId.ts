import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

const ValidateId = (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Not found" });
  }
  next();
};

export default ValidateId;

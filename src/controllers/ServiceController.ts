import { Request, Response } from "express";
import Service from "../models/Service";

const CreateNewService = async (req: Request, res: Response) => {
  try {
    const newService = await Service.create(req.body);
    res.status(200).json({
      success: true,
      data: newService,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export { CreateNewService };

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

const GetAllServices = async (req: Request, res: Response) => {
  try {
    const allServices = await Service.find({});
    res.status(200).json({
      success: true,
      data: allServices,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const GetServiceById = async (req: Request, res: Response) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(400).json({
        success: false,
        message: "Service Not Found",
      });
    }
    res.status(200).json({
      success: true,
      data: service,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const UpdateService = async (req: Request, res: Response) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, {
      ...req.body,
    });

    if (!service) {
      return res.status(400).json({
        success: false,
        message: "Service Not Found",
      });
    }

    res.status(200).json({
      success: true,
      data: service,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export { CreateNewService, GetAllServices, GetServiceById, UpdateService };

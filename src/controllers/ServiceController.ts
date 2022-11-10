import { Request, Response } from "express";
import Service from "../models/Service";

const CreateNewService = async (req: Request, res: Response) => {
  try {
    const newService = await Service.create(req.body);
    res.status(200).json({
      success: true,
      data: newService,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

const GetAllServices = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string);
  const limit = parseInt(req.query.limit as string);
  try {
    const allServices = await Service.find({})
      .sort({ createdAt: -1 })
      .skip(page * limit)
      .limit(limit);
    const totalServices = await Service.countDocuments();
    res.status(200).json({
      success: true,
      data: allServices,
      count: totalServices,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
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
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
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
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

const DeleteService = async (req: Request, res: Response) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);

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
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

export {
  CreateNewService,
  GetAllServices,
  GetServiceById,
  UpdateService,
  DeleteService,
};

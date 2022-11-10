import { Request, Response } from "express";
import Review from "../models/Review";

const CreateNewReview = async (req: Request, res: Response) => {
  try {
    const newReview = await Review.create(req.body);
    res.status(200).json({
      success: true,
      data: newReview,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

const GetMyReviews = async (req: Request, res: Response) => {
  const userEmail = req.query.userEmail;
  const decoded = req.decoded;

  if (userEmail !== decoded.email) {
    return res.status(403).json({
      success: false,
      message: "Forbidden Access",
    });
  }

  try {
    const allReviews = await Review.find({ userEmail: userEmail });
    res.status(200).json({
      success: true,
      data: allReviews,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

const GetAllReviews = async (req: Request, res: Response) => {
  const serviceId = req.query.serviceId;

  try {
    const allReviews = await Review.find({ serviceId: serviceId }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      data: allReviews,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const GetReviewById = async (req: Request, res: Response) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(400).json({
        success: false,
        message: "Review Not Found",
      });
    }
    res.status(200).json({
      success: true,
      data: review,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

const UpdateReview = async (req: Request, res: Response) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, {
      ...req.body,
    });

    if (!review) {
      return res.status(400).json({
        success: false,
        message: "Review Not Found",
      });
    }

    res.status(200).json({
      success: true,
      data: review,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

const DeleteReview = async (req: Request, res: Response) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);

    if (!review) {
      return res.status(400).json({
        success: false,
        message: "Review Not Found",
      });
    }

    res.status(200).json({
      success: true,
      data: review,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

export {
  CreateNewReview,
  GetAllReviews,
  GetReviewById,
  UpdateReview,
  DeleteReview,
  GetMyReviews,
};

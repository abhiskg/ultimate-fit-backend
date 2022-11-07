import express from "express";
import {
  CreateNewReview,
  DeleteReview,
  GetAllReviews,
  GetReviewById,
  UpdateReview,
} from "../controllers/ReviewController";

const router = express.Router();

router.get("/", GetAllReviews);
router.post("/", CreateNewReview);

router.route("/").get(GetReviewById).patch(UpdateReview).delete(DeleteReview);

export default router;

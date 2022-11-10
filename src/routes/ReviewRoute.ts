import express from "express";
import {
  CreateNewReview,
  DeleteReview,
  GetAllReviews,
  GetReviewById,
  UpdateReview,
} from "../controllers/ReviewController";
import ValidateId from "../middlewares/ValidateId";
import VerifyJWT from "../middlewares/VerifyJWT";

const router = express.Router();

router.get("/", VerifyJWT, GetAllReviews);
router.post("/", CreateNewReview);

router
  .route("/:id")
  .get(GetReviewById)
  .patch(UpdateReview)
  .delete(DeleteReview);

// middleware to validate Id
router.param("id", ValidateId);

export default router;

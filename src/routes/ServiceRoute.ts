import express from "express";
import {
  CreateNewService,
  DeleteService,
  GetAllServices,
  GetServiceById,
  UpdateService,
} from "../controllers/ServiceController";
import ValidateId from "../middlewares/ValidateId";

const router = express.Router();

router.get("/", GetAllServices);
router.post("/", CreateNewService);

router
  .route("/:id")
  .get(GetServiceById)
  .patch(UpdateService)
  .delete(DeleteService);

// middleware to validate Id
router.param("id", ValidateId);

export default router;

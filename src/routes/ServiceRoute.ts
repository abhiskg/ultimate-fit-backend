import express from "express";
import {
  CreateNewService,
  DeleteService,
  GetAllServices,
  GetServiceById,
  UpdateService,
} from "../controllers/ServiceController";

const router = express.Router();

router.get("/", GetAllServices);
router.post("/", CreateNewService);

router
  .route("/:id")
  .get(GetServiceById)
  .patch(UpdateService)
  .delete(DeleteService);

export default router;

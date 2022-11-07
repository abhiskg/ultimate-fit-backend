import express from "express";
import {
  CreateNewService,
  GetAllServices,
  GetServiceById,
} from "../controllers/ServiceController";

const router = express.Router();

router.get("/", GetAllServices);
router.post("/", CreateNewService);

router.route("/:id").get(GetServiceById);

export default router;

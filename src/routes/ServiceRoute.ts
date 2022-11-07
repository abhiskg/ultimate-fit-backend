import express from "express";
import {
  CreateNewService,
  GetAllServices,
} from "../controllers/ServiceController";

const router = express.Router();

router.get("/", GetAllServices);
router.post("/", CreateNewService);

export default router;

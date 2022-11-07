import express from "express";
import { CreateNewService } from "../controllers/ServiceController";

const router = express.Router();

router.post("/", CreateNewService);

export default router;

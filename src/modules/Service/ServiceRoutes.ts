import { Router } from "express";
import ServiceController from "../Service/Create/ServiceController";

const router = Router();

router.post("/services", ServiceController.create);

export default router;

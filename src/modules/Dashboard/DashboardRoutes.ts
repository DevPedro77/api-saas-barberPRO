import { Router } from "express";
import ListController from "../Dashboard/useCases/ListDashboard/ListController";

const router = Router();

router.get("/dashboard", ListController.handle);

export default router;

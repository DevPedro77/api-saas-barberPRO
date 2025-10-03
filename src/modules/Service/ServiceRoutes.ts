import { Router } from "express";
import ServiceController from "./useCases/CreateServices/ServiceController";
// Rotas de listagem
import ListControllerService from "./useCases/ListServices/ListController";
// Rotas de atualização
import UpdateController from "./useCases/UpdateServices/UpdateController";
// Rotas de deleção podem ser adicionadas futuramente
import DeleteController from "./useCases/DeleteService/DeleteController";

const router = Router();

// Rotas de criação de serviço
router.post("/services", ServiceController.create);
// Rotas de listagem de serviços
router.get("/services", ListControllerService.create);

// Rotas de atualização de serviços
router.put("/services/:id", UpdateController.create);

// Rotas de deleção de serviços
router.delete("/services/:id", DeleteController.delete);

export default router;

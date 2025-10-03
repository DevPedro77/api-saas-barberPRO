import { Router } from "express";
import ServiceController from "./useCases/CreateServices/ServiceController";
// Rotas de listagem
import ListControllerService from "./useCases/ListServices/ListController";
// Rotas de atualização
import UpdateController from "./useCases/UpdateServices/UpdateController";
// Rotas de deleção podem ser adicionadas futuramente
import DeleteController from "./useCases/DeleteService/DeleteController";

const router = Router();

/**
 * @swagger
 * /services:
 *   post:
 *     summary: Cria um novo serviço
 *     tags: [Serviços]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               durationMin:
 *                 type: number
 *             required:
 *               - name
 *               - price
 *     responses:
 *       201:
 *         description: Serviço criado com sucesso
 *       400:
 *         description: Erro na requisição
 *   get:
 *     summary: Lista todos os serviços
 *     tags: [Serviços]
 *     responses:
 *       200:
 *         description: Lista de serviços
 */
// Rotas de criação de serviço
router.post("/services", ServiceController.create);
// Rotas de listagem de serviços
router.get("/services", ListControllerService.create);

// Rotas de atualização de serviços
router.put("/services/:id", UpdateController.create);

// Rotas de deleção de serviços
router.delete("/services/:id", DeleteController.delete);

export default router;

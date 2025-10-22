"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Auth_1 = __importDefault(require("../../middlewares/Auth"));
const ServiceController_1 = __importDefault(require("./useCases/CreateServices/ServiceController"));
// Rotas de listagem
const ListController_1 = __importDefault(require("./useCases/ListServices/ListController"));
// Rotas de atualização
const UpdateController_1 = __importDefault(require("./useCases/UpdateServices/UpdateController"));
// Rotas de deleção podem ser adicionadas futuramente
const DeleteController_1 = __importDefault(require("./useCases/DeleteService/DeleteController"));
const router = (0, express_1.Router)();
const adminOnly = Auth_1.default; // Middleware para proteger rotas (apenas admins podem criar/atualizar/deletar)
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
router.post("/services", Auth_1.default, ServiceController_1.default.create);
// Rotas de listagem de serviços
router.get("/services", Auth_1.default, ListController_1.default.create);
// Rotas de atualização de serviços
router.put("/services/:id", Auth_1.default, UpdateController_1.default.create);
// Rotas de deleção de serviços
router.delete("/services/:id", Auth_1.default, DeleteController_1.default.delete);
exports.default = router;
//# sourceMappingURL=ServiceRoutes.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClientController_1 = __importDefault(require("../Consumer/useCases/createConsumer/ClientController"));
const ListClientController_1 = __importDefault(require("../Consumer/useCases/listConsumer/ListClientController"));
const router = (0, express_1.Router)();
// criar rota para cadastrar cliente
/**
 * @swagger
 * /clients:
 *   post:
 *     summary: Cria um novo cliente
 *     tags: [Clientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *             required:
 *               - name
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso
 *       400:
 *         description: Erro na requisição
 *   get:
 *     summary: Lista todos os clientes
 *     tags: [Clientes]
 *     responses:
 *       200:
 *         description: Lista de clientes
 */
router.post('/customers', ClientController_1.default.create);
// listar clientes
router.get('/customers', ListClientController_1.default.list);
exports.default = router;
//# sourceMappingURL=ClientRoutes.js.map
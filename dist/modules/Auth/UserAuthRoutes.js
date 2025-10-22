"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserAuthController_1 = __importDefault(require("./UserAuthController"));
const router = (0, express_1.Router)();
router.post("/auth/login", UserAuthController_1.default.login);
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Realiza o login de um usuário
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *       401:
 *         description: Credenciais inválidas
 *       400:
 *         description: Erro na requisição
 *       500:
 *         description: Erro interno do servidor
 */
exports.default = router;
//# sourceMappingURL=UserAuthRoutes.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Auth_1 = __importDefault(require("../../middlewares/Auth"));
const ControllerAppointment_1 = __importDefault(require("./useCases/CreateAppointments/ControllerAppointment"));
const DeleteControllerAppointments_1 = __importDefault(require("./useCases/DeleteAppointments.ts/DeleteControllerAppointments"));
const ListControllerAppoiments_1 = __importDefault(require("../Appointments/useCases/ListAppointments/ListControllerAppoiments"));
const router = (0, express_1.Router)();
// Middleware para proteger rotas (apenas admins podem criar/atualizar/deletar)
const adminOnly = Auth_1.default;
router.post('/appointments', ControllerAppointment_1.default.handle);
router.delete('/appointments/:appointmentId', Auth_1.default, DeleteControllerAppointments_1.default.delete);
router.get('/appointments', Auth_1.default, ListControllerAppoiments_1.default.list);
/**
 * @swagger
 * /appointments:
 *   post:
 *     summary: Cria um novo agendamento
 *     tags: [Agendamentos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               serviceId:
 *                 type: string
 *                 description: ID do serviço a ser agendado
 *               dateTime:
 *                 type: string
 *                 format: date-time
 *                 description: Data e hora do agendamento
 *               customerId:
 *                 type: string
 *                 description: ID do cliente que está agendando
 *               status:
 *                 type: string
 *                 enum: [pending, confirmed, completed, cancelled]
 *                 description: Status do agendamento
 *             required:
 *               - serviceId
 *     responses:
 *       201:
 *         description: Agendamento criado com sucesso
 *       400:
 *         description: Erro na requisição
 *
 *   get:
 *     summary: Lista todos os agendamentos
 *     tags: [Agendamentos]
 *     responses:
 *       200:
 *         description: Lista de agendamentos
 *       400:
 *         description: Erro na requisição
 *       500:
 *         description: Ocorreu um erro inesperado no servidor. Tente novamente mais tarde ou entre em contato com o suporte.
 *
 * /appointments/{appointmentId}:
 *   delete:
 *     summary: Deleta um agendamento pelo ID
 *     tags: [Agendamentos]
 *     parameters:
 *       - in: path
 *         name: appointmentId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do agendamento a ser deletado
 *     responses:
 *       200:
 *         description: Agendamento deletado com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Agendamento não encontrado
 */
exports.default = router;
//# sourceMappingURL=AppointmentRoutes.js.map
import { Router } from 'express';
import authMiddleware from '../../middlewares/Auth';
import CreateAppointmentController from './useCases/CreateAppointments/ControllerAppointment';
import DeleteAppointmentController from './useCases/DeleteAppointments.ts/DeleteControllerAppointments';

const router = Router();

// Middleware para proteger rotas (apenas admins podem criar/atualizar/deletar)
const adminOnly = authMiddleware;

router.post('/appointments', authMiddleware, CreateAppointmentController.handle);
router.delete('/appointments/:appointmentId', authMiddleware, DeleteAppointmentController.delete);

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
 *             required:
 *               - serviceId
 *     responses:
 *       201:
 *         description: Agendamento criado com sucesso
 *       400:
 *         description: Erro na requisição
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

export default router;

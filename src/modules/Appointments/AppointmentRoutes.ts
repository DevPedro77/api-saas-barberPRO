import { Router } from 'express';
import authMiddleware from '../../middlewares/Auth';
import CreateAppointmentController from './useCases/CreateAppointments/ControllerAppointment';
import DeleteAppointmentController from './useCases/DeleteAppointments.ts/DeleteControllerAppointments';
import ListAppointmentsController from '../Appointments/useCases/ListAppointments/ListControllerAppoiments';

const router = Router();

// Middleware para proteger rotas (apenas admins podem criar/atualizar/deletar)
const adminOnly = authMiddleware;

router.post('/appointments', CreateAppointmentController.handle);
router.delete('/appointments/:appointmentId', authMiddleware, DeleteAppointmentController.delete);
router.get('/appointments', authMiddleware, ListAppointmentsController.list);

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

export default router;

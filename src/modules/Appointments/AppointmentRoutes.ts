import {Router} from 'express';
import authMiddleware from '../../middlewares/Auth';
import CreateAppointmentController from './useCases/CreateAppointments/ControllerAppointment';



const router = Router();
const adminOnly = authMiddleware; // Middleware para proteger rotas (apenas admins podem criar/atualizar/deletar)


router.post('/appointments', authMiddleware, CreateAppointmentController.handle);

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
 *               service_id:
 *                 type: string
 *             required:
 *               - service_id
 *     responses:
 *       201:
 *         description: Agendamento criado com sucesso
 *       400:
 *         description: Erro na requisição
 */


export default router;
import {Router} from "express"
import ClientController from "../Consumer/useCases/createConsumer/ClientController"
import ListClientController from "../Consumer/useCases/listConsumer/ListClientController"


const router = Router();
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
router.post('/customers', ClientController.create);
// listar clientes
router.get('/customers', ListClientController.list);

export default router;
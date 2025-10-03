import {Router} from "express"
import ClientController from "../Consumer/useCases/createConsumer/ClientController"
import ListClientController from "../Consumer/useCases/listConsumer/ListClientController"


const router = Router();
// criar rota para cadastrar cliente
router.post('/customers', ClientController.create);
// listar clientes
router.get('/customers', ListClientController.list);

export default router;
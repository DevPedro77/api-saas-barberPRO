import {Router} from "express"
import ClientController from "./Create/ClientController"
import ListClientController from "./List/ListClientController"


const router = Router();
// criar rota para cadastrar cliente
router.post('/customers', ClientController.create);
// listar clientes
router.get('/customers', ListClientController.list);

export default router;
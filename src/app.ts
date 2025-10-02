import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
// Rotas de Usuário
import UserRoutes from "../src/modules/Users/UserRoutes"
// Rotas de Clientes
import ClientRoutes from "../src/modules/Clients/ClientRoutes"
// Rotas de serviços
import ServiceRoutes from "../src/modules/Service/ServiceRoutes"


const app = express();
app.use(cors());
app.use(express.json());
app.use( UserRoutes); // Adiciona as rotas de usuário
app.use(ClientRoutes); // Adiciona as rotas de clientes
app.use(ServiceRoutes); // Adiciona as rotas de serviços

app.get('/', (req, res) => {
  res.status(200).send('OK');
});
config();

export default app;
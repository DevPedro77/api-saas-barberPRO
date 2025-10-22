import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
// Rotas de Usuário
import UserRoutes from "./modules/Users/UserRoutes";
//Rotas de autenticação
import AuthRoutes from "./modules/Auth/UserAuthRoutes";
// Rotas de Clientes
import ClientRoutes from "./modules/Consumer/ClientRoutes"
// Rotas de serviços
import ServiceRoutes from "./modules/Service/ServiceRoutes"
// importando as rotas de agendamentos
import AppointmentRoutes from "./modules/Appointments/AppointmentRoutes"
// importando as rotas de dashboard
import DashboardRoutes from "./modules/Dashboard/DashboardRoutes"
// Configuração do Swagger
import { setupSwagger } from "./config/swagger";

const app = express();
app.use(cors());
app.use(express.json());

setupSwagger(app); // Adiciona a documentação Swagger em /docs

app.use(UserRoutes); // Adiciona as rotas de usuário
app.use(AuthRoutes); // Adiciona as rotas de autenticação
app.use(ClientRoutes); // Adiciona as rotas de clientes
app.use(ServiceRoutes); // Adiciona as rotas de serviços
app.use(AppointmentRoutes); // Adiciona as rotas de agendamentos
app.use(DashboardRoutes); // Adiciona as rotas de dashboard

app.get('/', (req, res) => {
  res.status(200).send('OK');
});
config();

export default app;
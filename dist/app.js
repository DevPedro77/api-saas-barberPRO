"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
// Rotas de Usuário
const UserRoutes_1 = __importDefault(require("./modules/Users/UserRoutes"));
//Rotas de autenticação
const UserAuthRoutes_1 = __importDefault(require("./modules/Auth/UserAuthRoutes"));
// Rotas de Clientes
const ClientRoutes_1 = __importDefault(require("./modules/Consumer/ClientRoutes"));
// Rotas de serviços
const ServiceRoutes_1 = __importDefault(require("./modules/Service/ServiceRoutes"));
// importando as rotas de agendamentos
const AppointmentRoutes_1 = __importDefault(require("./modules/Appointments/AppointmentRoutes"));
// importando as rotas de dashboard
const DashboardRoutes_1 = __importDefault(require("./modules/Dashboard/DashboardRoutes"));
// Configuração do Swagger
const swagger_1 = require("./config/swagger");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, swagger_1.setupSwagger)(app); // Adiciona a documentação Swagger em /docs
app.use(UserRoutes_1.default); // Adiciona as rotas de usuário
app.use(UserAuthRoutes_1.default); // Adiciona as rotas de autenticação
app.use(ClientRoutes_1.default); // Adiciona as rotas de clientes
app.use(ServiceRoutes_1.default); // Adiciona as rotas de serviços
app.use(AppointmentRoutes_1.default); // Adiciona as rotas de agendamentos
app.use(DashboardRoutes_1.default); // Adiciona as rotas de dashboard
app.get('/', (req, res) => {
    res.status(200).send('OK');
});
(0, dotenv_1.config)();
exports.default = app;
//# sourceMappingURL=app.js.map
import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import UserRoutes from "../src/modules/Users/UserRoutes"



const app = express();
app.use(cors());
app.use(express.json());
app.use( UserRoutes); // Adiciona as rotas de usuário


app.get('/', (req, res) => {
  res.status(200).send('OK');
});
config();

export default app;
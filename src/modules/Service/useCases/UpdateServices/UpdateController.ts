import { Request, Response } from 'express';
import UpdateService from './UpdateService';

class UpdateController {
  async create(req: Request, res: Response) {
    // Pega o ID dos params
    const { id } = req.params;
    // Pega os dados do body
    const { name, price, durationMin } = req.body;

    try {
      // Validação básica
      if (!id) {
        return res.status(400).json({ error: "O id do serviço é obrigatório." });
      }

      if (!name && !price && !durationMin) {
        return res.status(400).json({ error: "Nenhum dado para atualização foi fornecido." });
      }

      const service = await UpdateService.handle({
        id,
        name,
        price,
        durationMin,
      });

      return res.status(200).json(service);

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      return res.status(400).json({ error: errorMessage });
    }
  }
}

export default new UpdateController();

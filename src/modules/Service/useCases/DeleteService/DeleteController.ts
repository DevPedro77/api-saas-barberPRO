import { Request, Response } from 'express';
import DeleteService from '../DeleteService/DeleteService';

class DeleteController {
  async delete(req: Request, res: Response) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "O id do serviço é obrigatório." });
    }

    try {
      const deletedService = await DeleteService.handle({ id });
      return res.status(200).json(deletedService);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      if (message === "Serviço não encontrado") {
        return res.status(404).json({ error: message });
      }
      return res.status(500).json({ error: message });
    }
  }
}

export default new DeleteController();

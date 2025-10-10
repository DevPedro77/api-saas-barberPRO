import { Request, Response } from "express";
import ListService from "./ListService";

class ListController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const service = new ListService();
      const data = await service.handle();

      return res.status(200).json({
        success: true,
        data,
      });
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Erro ao listar métricas.",
        error: error.message,
      });
    }
  }
}

export default new ListController();

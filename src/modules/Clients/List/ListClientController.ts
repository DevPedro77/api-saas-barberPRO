import { Response, Request } from "express";
import ListClientService from "./ListClientService";

class ListClientController {
  async list(req: Request, res: Response) {
    try {
      const clients = await ListClientService.handle();
      return res.status(200).json(clients);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      return res.status(400).json({ error: message });
    }
  }
}

export default new ListClientController();
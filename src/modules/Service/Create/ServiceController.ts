import e, { Response, Request } from "express";
import ServiceService from "../Create/CreateService";

class ServiceController {
  async create(req: Request, res: Response){
    const {name, price} = req.body;
    const durationMin = req.body.durationMin || 60;

    try {
      const service = await ServiceService.handle({
        name,
        price,
        durationMin
      });
      return res.status(201).json(service);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      return res.status(400).json({ error: errorMessage });
    }
  }
}

export default new ServiceController();
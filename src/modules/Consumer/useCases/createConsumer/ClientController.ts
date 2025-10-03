import { Response, Request } from "express";
import ClientService from "../createConsumer/ClientService";


class ClientController {
  async create(req: Request, res: Response){
    const {name, phone} = req.body;


    try {
      const client = await ClientService.handle({
        name, phone
      });

      
    return res.status(201).json(client);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      return res.status(404).json({ error: message });
    }
  }
}



export default new ClientController();
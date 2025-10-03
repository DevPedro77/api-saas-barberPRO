import {Response, Request} from "express"
import ListService from './ListService';

class ListControllerService {
  async create(req: Request, res: Response){
    const services = await ListService.execute();
    return res.json(services);
  }
}

export default new ListControllerService();
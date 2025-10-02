import {Response, Request} from "express"
import UserService from "./UserService"

class UserController {
  async create(req: Request, res: Response) {
    const { email, password, name, roles } = req.body;

    try {
      const user = await UserService.createUser({
        email,
        password,
        name,
        roles
      });

      return res.status(201).json(user);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      return res.status(400).json({ error: message });
    }
  }
}

export default new UserController();

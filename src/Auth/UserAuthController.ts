import { Request, Response } from "express";
import AuthUserService from "../Auth/UserAuthService";

class AuthController {
  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      // Chama o service
      const authData = await AuthUserService.handle({ email, password });

      // Retorna token + usuário
      return res.status(200).json(authData);
    } catch (error: any) {
      // Retorna erro de forma genérica ou específica
      return res.status(400).json({ message: error.message || "Erro ao autenticar" });
    }
  }
}

export default AuthController;

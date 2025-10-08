import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

// 1️⃣ Interface para extender o Request (incluir req.user)
export interface AuthRequest extends Request {
  user?: string | JwtPayload;
}

// 2️⃣ Middleware de autenticação
export default function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  // 3️⃣ Verifica se veio o token
  if (!authHeader) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  // 4️⃣ Extrai o token (espera formato "Bearer <token>")
  const [, token] = authHeader.split(" ");

  try {
    // 5️⃣ Verifica e decodifica o token JWT
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      return res.status(500).json({ message: "JWT_SECRET não configurado no ambiente" });
    }
    const decoded = jwt.verify(token as string, jwtSecret as string);

    // 6️⃣ Injeta o usuário decodificado no req
    req.user = decoded;

    // 7️⃣ Continua para a próxima etapa
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Token inválido ou expirado" });
  }
}

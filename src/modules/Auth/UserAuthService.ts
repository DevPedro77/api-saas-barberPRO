import prisma from "../../config/database";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

interface AuthDataRequest {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}

class AuthUserService {
  static async handle({ email, password }: AuthDataRequest): Promise<AuthResponse> {
    // 1️⃣ Verifica se o usuário existe
    const userExist = await prisma.user.findFirst({
      where: { email },
    });

    if (!userExist) {
      throw new Error("Usuário não encontrado");
    }

    // 2️⃣ Valida a senha
    const passwordMatch = await compare(password, userExist.passwordHash);
    if (!passwordMatch) {
      throw new Error("Senha incorreta");
    }

    // 3️⃣ Prepara payload para JWT
    const payload = {
      id: userExist.id,
      role: userExist.role,
    };

    // 4️⃣ Gera o token JWT
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      throw new Error("JWT_SECRET não configurado no ambiente");
    }

    const token = jwt.sign(payload, jwtSecret, { expiresIn: "1d" });

    // 5️⃣ Retorna token + dados do usuário
    return {
      token,
      user: {
        id: userExist.id,
        name: userExist.name,
        email: userExist.email,
        role: userExist.role,
      },
    };
  }
}

export default AuthUserService;

import prisma from "../../config/database";
import { hash } from "bcryptjs";

interface CreateUserData {
  email: string;
  password: string;
  name: string;
  roles: string;
}

class UserService {
  async createUser({ email, password, name, roles }: CreateUserData) {
    // gera hash seguro da senha
    const passwordHash = await hash(password, 8);

    // verifica se já existe usuário com esse email
    const findUser = await prisma.user.findUnique({
      where: { email },
    });

    if (findUser) {
      throw new Error("Usuário já cadastrado com esse email");
    }

    // cria usuário no banco
    const user = await prisma.user.create({
      data: {
        email,
        passwordHash, // agora salva o hash
        name,
        role: roles,
      },
    });

    // retorna sem a senha
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      createdAt: user.createdAt,
    };
  }
}

export default new UserService();

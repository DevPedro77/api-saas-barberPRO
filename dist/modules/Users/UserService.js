"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../config/database"));
const bcryptjs_1 = require("bcryptjs");
class UserService {
    async createUser({ email, password, name, roles }) {
        // gera hash seguro da senha
        const passwordHash = await (0, bcryptjs_1.hash)(password, 8);
        // verifica se já existe usuário com esse email
        const findUser = await database_1.default.user.findUnique({
            where: { email },
        });
        if (findUser) {
            throw new Error("Usuário já cadastrado com esse email");
        }
        // cria usuário no banco
        const user = await database_1.default.user.create({
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
exports.default = new UserService();
//# sourceMappingURL=UserService.js.map
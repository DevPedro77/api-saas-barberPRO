"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../config/database"));
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthUserService {
    static async handle({ email, password }) {
        // 1️⃣ Verifica se o usuário existe
        const userExist = await database_1.default.user.findFirst({
            where: { email },
        });
        if (!userExist) {
            throw new Error("Usuário não encontrado");
        }
        // 2️⃣ Valida a senha
        const passwordMatch = await (0, bcryptjs_1.compare)(password, userExist.passwordHash);
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
        const token = jsonwebtoken_1.default.sign(payload, jwtSecret, { expiresIn: "1d" });
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
exports.default = AuthUserService;
//# sourceMappingURL=UserAuthService.js.map
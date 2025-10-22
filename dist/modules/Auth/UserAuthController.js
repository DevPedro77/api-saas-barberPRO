"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserAuthService_1 = __importDefault(require("./UserAuthService"));
class AuthController {
    static async login(req, res) {
        try {
            const { email, password } = req.body;
            // Chama o service
            const authData = await UserAuthService_1.default.handle({ email, password });
            // Retorna token + usuário
            return res.status(200).json(authData);
        }
        catch (error) {
            // Retorna erro de forma genérica ou específica
            return res.status(400).json({ message: error.message || "Erro ao autenticar" });
        }
    }
}
exports.default = AuthController;
//# sourceMappingURL=UserAuthController.js.map
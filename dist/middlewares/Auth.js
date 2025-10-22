"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = authMiddleware;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// 2️⃣ Middleware de autenticação
function authMiddleware(req, res, next) {
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
        const decoded = jsonwebtoken_1.default.verify(token, jwtSecret);
        // 6️⃣ Injeta o usuário decodificado no req
        req.user = decoded;
        // 7️⃣ Continua para a próxima etapa
        return next();
    }
    catch (err) {
        return res.status(401).json({ message: "Token inválido ou expirado" });
    }
}
//# sourceMappingURL=Auth.js.map
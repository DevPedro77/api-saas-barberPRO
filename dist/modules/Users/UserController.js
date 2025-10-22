"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("./UserService"));
class UserController {
    async create(req, res) {
        const { email, password, name, roles } = req.body;
        try {
            const user = await UserService_1.default.createUser({
                email,
                password,
                name,
                roles
            });
            return res.status(201).json(user);
        }
        catch (error) {
            const message = error instanceof Error ? error.message : 'Unknown error';
            return res.status(400).json({ error: message });
        }
    }
}
exports.default = new UserController();
//# sourceMappingURL=UserController.js.map
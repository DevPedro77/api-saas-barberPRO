"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListService_1 = __importDefault(require("./ListService"));
class ListController {
    async handle(req, res) {
        try {
            const service = new ListService_1.default();
            const data = await service.handle();
            return res.status(200).json({
                success: true,
                data,
            });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({
                success: false,
                message: "Erro ao listar métricas.",
                error: error.message,
            });
        }
    }
}
exports.default = new ListController();
//# sourceMappingURL=ListController.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListClientService_1 = __importDefault(require("./ListClientService"));
class ListClientController {
    async list(req, res) {
        try {
            const clients = await ListClientService_1.default.handle();
            return res.status(200).json(clients);
        }
        catch (error) {
            const message = error instanceof Error ? error.message : 'Unknown error';
            return res.status(400).json({ error: message });
        }
    }
}
exports.default = new ListClientController();
//# sourceMappingURL=ListClientController.js.map
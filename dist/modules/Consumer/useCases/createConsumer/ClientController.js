"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClientService_1 = __importDefault(require("../createConsumer/ClientService"));
class ClientController {
    async create(req, res) {
        const { name, phone } = req.body;
        try {
            const client = await ClientService_1.default.handle({
                name, phone
            });
            return res.status(201).json(client);
        }
        catch (error) {
            const message = error instanceof Error ? error.message : 'Unknown error';
            return res.status(404).json({ error: message });
        }
    }
}
exports.default = new ClientController();
//# sourceMappingURL=ClientController.js.map
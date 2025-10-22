"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateService_1 = __importDefault(require("./CreateService"));
class ServiceController {
    async create(req, res) {
        const { name, price } = req.body;
        const durationMin = req.body.durationMin || 60;
        try {
            const service = await CreateService_1.default.handle({
                name,
                price,
                durationMin
            });
            return res.status(201).json(service);
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            return res.status(400).json({ error: errorMessage });
        }
    }
}
exports.default = new ServiceController();
//# sourceMappingURL=ServiceController.js.map
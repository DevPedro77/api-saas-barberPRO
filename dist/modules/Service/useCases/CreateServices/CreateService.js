"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../../../config/database"));
class CreateService {
    async handle({ name, price, durationMin }) {
        // verifica se já existe serviço com esse nome
        const findService = await database_1.default.service.findFirst({
            where: { name },
        });
        if (!findService) {
            const service = await database_1.default.service.create({
                data: {
                    name,
                    price,
                    durationMin,
                },
            });
            return service;
        }
        else {
            throw new Error("Serviço já cadastrado com esse nome");
        }
    }
}
exports.default = new CreateService();
//# sourceMappingURL=CreateService.js.map
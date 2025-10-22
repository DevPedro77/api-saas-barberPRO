"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../../../config/database"));
class ClientService {
    async handle({ name, phone }) {
        // verificar se o cliente já agendou serviço
        const findClient = await database_1.default.customer.findFirst({
            where: { phone },
        });
        if (!findClient) {
            // cria cliente no banco
            await database_1.default.customer.create({
                data: {
                    name,
                    phone,
                },
            });
            return;
        }
        return findClient;
    }
}
exports.default = new ClientService();
//# sourceMappingURL=ClientService.js.map
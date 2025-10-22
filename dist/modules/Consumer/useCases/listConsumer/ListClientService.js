"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../../../config/database"));
class ListClientService {
    async handle() {
        // lista todos os clientes
        const clients = await database_1.default.customer.findMany({
            orderBy: {
                createdAt: 'desc' // em caso de nomes iguais, ordena pela data de criação mais recente
            },
        });
        return clients;
    }
}
exports.default = new ListClientService();
//# sourceMappingURL=ListClientService.js.map
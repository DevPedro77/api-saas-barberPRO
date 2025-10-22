"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../../../config/database"));
class DeleteServices {
    async handle({ id }) {
        const service = await database_1.default.service.findUnique({
            where: { id }
        });
        //Validando se o serviço existe
        if (!service) {
            throw new Error("Serviço não encontrado");
        }
        // Verifica se há agendamentos associados ao serviço
        // delete service
        const deletedService = await database_1.default.service.delete({
            where: { id }
        });
        return deletedService;
    }
}
exports.default = new DeleteServices();
//# sourceMappingURL=DeleteService.js.map
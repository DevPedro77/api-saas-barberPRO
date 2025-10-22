"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../../../config/database"));
class UpdateServices {
    async handle({ id, name, price, durationMin }) {
        const service = await database_1.default.service.findUnique({
            where: { id }
        });
        if (service) {
            const updatedService = await database_1.default.service.update({
                where: { id },
                data: {
                    name: name || service.name,
                    price: price !== undefined ? price : service.price,
                    durationMin: durationMin !== undefined ? durationMin : service.durationMin,
                }
            });
            return updatedService;
        }
        else {
            throw new Error("Serviço não encontrado");
        }
    }
}
exports.default = new UpdateServices();
//# sourceMappingURL=UpdateService.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../../../config/database"));
class ListService {
    async execute() {
        const services = await database_1.default.service.findMany({
            select: {
                id: true,
                name: true,
                durationMin: true,
                price: true,
                createdAt: true,
            }
        });
        return services;
    }
}
exports.default = new ListService();
//# sourceMappingURL=ListService.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListService_1 = __importDefault(require("./ListService"));
class ListControllerService {
    async create(req, res) {
        const services = await ListService_1.default.execute();
        return res.json(services);
    }
}
exports.default = new ListControllerService();
//# sourceMappingURL=ListController.js.map
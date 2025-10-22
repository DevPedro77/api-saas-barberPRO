"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListServiceAppoiments_1 = __importDefault(require("../ListAppointments/ListServiceAppoiments"));
class ListControllerAppointments {
    static async list(req, res) {
        try {
            const appointments = await ListServiceAppoiments_1.default.handle();
            return res.status(200).json(appointments);
        }
        catch (error) {
            return res.status(400).json({ message: error.message || "Erro ao buscar agendamentos" });
        }
    }
}
exports.default = ListControllerAppointments;
//# sourceMappingURL=ListControllerAppoiments.js.map
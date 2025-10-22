"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../../../config/database"));
class DeleteServiceAppointments {
    static async handle({ appointment_Id }) {
        // verificar se o agendamento existe
        const appointmentExist = await database_1.default.appointment.findUnique({
            where: { id: appointment_Id }
        });
        if (!appointmentExist) {
            throw new Error("Agendamento não encontrado");
        }
        // Deletar o agendamento
        await database_1.default.appointment.delete({
            where: { id: appointment_Id }
        });
    }
}
exports.default = DeleteServiceAppointments;
//# sourceMappingURL=DeleteServiceAppointments.js.map
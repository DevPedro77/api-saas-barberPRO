"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DeleteServiceAppointments_1 = __importDefault(require("./DeleteServiceAppointments"));
class DeleteAppointmentController {
    static async delete(req, res) {
        const { appointment_Id } = req.params;
        if (!appointment_Id) {
            return res.status(400).json({ message: "appointment_Id é obrigatório" });
        }
        try {
            await DeleteServiceAppointments_1.default.handle({ appointment_Id });
            return res.status(200).json({ message: "Agendamento deletado com sucesso" });
        }
        catch (error) {
            return res.status(400).json({ message: error.message || "Erro ao deletar agendamento" });
        }
    }
}
exports.default = DeleteAppointmentController;
//# sourceMappingURL=DeleteControllerAppointments.js.map
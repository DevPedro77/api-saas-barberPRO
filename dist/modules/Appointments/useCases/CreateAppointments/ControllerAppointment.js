"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceAppointments_1 = __importDefault(require("../CreateAppointments/ServiceAppointments"));
class CreateAppointmentController {
    static async handle(req, res) {
        const { serviceId, dateTime, customerId, status } = req.body;
        // Validação básica dos campos obrigatórios
        if (!serviceId || !dateTime || !customerId) {
            return res.status(400).json({ message: "serviceId, dateTime e customerId são obrigatórios" });
        }
        try {
            const appointment = await ServiceAppointments_1.default.handle({
                serviceId,
                dateTime: new Date(dateTime), // garante que seja um Date
                customerId,
                status,
            });
            return res.status(201).json(appointment);
        }
        catch (error) {
            return res.status(400).json({ message: error.message || "Erro ao criar agendamento" });
        }
    }
}
exports.default = CreateAppointmentController;
//# sourceMappingURL=ControllerAppointment.js.map
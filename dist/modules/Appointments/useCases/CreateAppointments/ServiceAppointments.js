"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../../../config/database"));
class CreateAppointmentService {
    static async handle({ serviceId, dateTime, customerId, status = "pending", }) {
        // 1. Verificar se o serviço existe
        const serviceExist = await database_1.default.service.findUnique({
            where: { id: serviceId },
        });
        if (!serviceExist) {
            throw new Error("Serviço não encontrado");
        }
        // 2. Verificar se o cliente existe
        const customerExist = await database_1.default.customer.findUnique({
            where: { id: customerId },
        });
        if (!customerExist) {
            throw new Error("Cliente não encontrado");
        }
        // 3. Verificar se já existe um agendamento para o mesmo serviço, cliente e data/hora
        const appointmentExist = await database_1.default.appointment.findFirst({
            where: {
                serviceId,
                customerId,
                dateTime,
            },
        });
        if (appointmentExist) {
            throw new Error("Já existe um agendamento para este serviço, cliente e data/hora");
        }
        // 4. Criar o agendamento
        const appointment = await database_1.default.appointment.create({
            data: {
                serviceId,
                customerId,
                dateTime,
                status,
            },
            include: {
                service: true,
                customer: true,
            },
        });
        return appointment;
    }
}
exports.default = CreateAppointmentService;
//# sourceMappingURL=ServiceAppointments.js.map
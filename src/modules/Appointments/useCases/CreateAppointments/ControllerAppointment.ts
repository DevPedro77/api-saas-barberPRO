import { Request, Response } from "express";
import CreateAppointmentService from "../CreateAppointments/ServiceAppointments";

class CreateAppointmentController {
  static async handle(req: Request, res: Response) {
    const { serviceId, dateTime, customerId, status } = req.body;

    // Validação básica dos campos obrigatórios
    if (!serviceId || !dateTime || !customerId) {
      return res.status(400).json({ message: "serviceId, dateTime e customerId são obrigatórios" });
    }

    try {
      const appointment = await CreateAppointmentService.handle({
        serviceId,
        dateTime: new Date(dateTime), // garante que seja um Date
        customerId,
        status,
      });

      return res.status(201).json(appointment);
    } catch (error: any) {
      return res.status(400).json({ message: error.message || "Erro ao criar agendamento" });
    }
  }
}

export default CreateAppointmentController;

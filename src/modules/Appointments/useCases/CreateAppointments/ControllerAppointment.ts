import { Response, Request } from "express";
import CreateAppointmentService from "../CreateAppointments/ServiceAppointments";


class CreateAppointmentController {
  static async handle(req: Request, res: Response) {
    const {service_id} = req.body;


    try {
      const appointments = await CreateAppointmentService.handle({ serviceId: service_id });
      return res.status(200).json(appointments);
    } catch (error: any) {
      return res.status(400).json({ message: error.message || "Erro ao buscar agendamentos" });
    }
  }
}

export default CreateAppointmentController;
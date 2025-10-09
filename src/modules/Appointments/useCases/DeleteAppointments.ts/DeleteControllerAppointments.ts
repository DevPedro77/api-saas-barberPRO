import { Request, Response } from "express";
import DeleteAppointmentService from "./DeleteServiceAppointments";


class DeleteAppointmentController {
  static async delete(req: Request, res: Response) {

    const { appointment_Id } = req.params;

    if (!appointment_Id) {
      return res.status(400).json({ message: "appointment_Id é obrigatório" });
    }

    try {
      await DeleteAppointmentService.handle({ appointment_Id });
      return res.status(200).json({ message: "Agendamento deletado com sucesso" });
    } catch (error: any) {
      return res.status(400).json({ message: error.message || "Erro ao deletar agendamento" });
    }
  }
}


export default DeleteAppointmentController;
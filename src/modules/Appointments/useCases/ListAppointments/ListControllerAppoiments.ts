import { Request, Response } from "express";
import ListService from '../ListAppointments/ListServiceAppoiments'


class ListControllerAppointments {
  static async list(req: Request, res: Response) {

    try {
      const appointments = await ListService.handle();
      return res.status(200).json(appointments);
    } catch (error: any) {
      return res.status(400).json({ message: error.message || "Erro ao buscar agendamentos" });
    }
  }
}

export default ListControllerAppointments;
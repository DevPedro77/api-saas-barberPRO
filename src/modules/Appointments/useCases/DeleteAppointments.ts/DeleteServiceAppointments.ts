import prisma from "../../../../config/database";


interface ServiceAppointmentsRequest {
  appointment_Id: string;
}


class DeleteServiceAppointments {
  static async handle({appointment_Id}: ServiceAppointmentsRequest){


    // verificar se o agendamento existe
    const appointmentExist = await prisma.appointment.findUnique({
      where: {id: appointment_Id}
    })

    if (!appointmentExist) {
      throw new Error("Agendamento não encontrado")
    }

    // Deletar o agendamento
    await prisma.appointment.delete({
      where: {id: appointment_Id}
    })
  }
}


export default DeleteServiceAppointments;
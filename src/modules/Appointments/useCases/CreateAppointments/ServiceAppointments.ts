import prisma from "../../../../config/database";


interface ServiceAppointmentsRequest {
  serviceId: string;
}

interface ServiceAppointmentsResponse {
  id: string;
  date: Date;
  status: string;
  service: {
    id: string;
    name: string;
    price: number;
    durationMin: number;
  };
  customer: {
    id: string;
    name: string;
    email: string;
  };

  
}


class ServiceAppointments {
  static async handle({ serviceId }: ServiceAppointmentsRequest): Promise<ServiceAppointmentsResponse[]> {
    // Verifica se o serviço existe
    const serviceExist = await prisma.service.findUnique({
      where: { id: serviceId },
    });

    if (!serviceExist) {
      throw new Error("Serviço não encontrado");
    }

    // Busca os agendamentos relacionados ao serviço
    const appointments = await prisma.appointment.findMany({
      where: { serviceId },
      include: {
        service: {
          select: {
            id: true,
            name: true,
            price: true,
            durationMin: true,
          },
        },
        customer: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    // Mapeia os resultados para o tipo de resposta esperado
    return appointments.map((appointment: any) => ({
      id: appointment.id,
      date: appointment.date,
      status: appointment.status,
      service: appointment.service,
      customer: appointment.customer,
    }));
  }
}


export default ServiceAppointments;
import prisma from "../../../../config/database";

interface CreateAppointmentRequest {
  serviceId: string;
  dateTime: Date;
  customerId: string;
  barberId?: string;
  status?: "pending" | "confirmed" | "completed" | "cancelled";
}

class CreateAppointmentService {
  static async handle({
    serviceId,
    dateTime,
    customerId,
    status = "pending",
  }: CreateAppointmentRequest) {
    // 1. Verificar se o serviço existe
    const serviceExist = await prisma.service.findUnique({
      where: { id: serviceId },
    });
    if (!serviceExist) {
      throw new Error("Serviço não encontrado");
    }

    // 2. Verificar se o cliente existe
    const customerExist = await prisma.customer.findUnique({
      where: { id: customerId },
    });
    if (!customerExist) {
      throw new Error("Cliente não encontrado");
    }
    
    // 3. Verificar se já existe um agendamento para o mesmo serviço, cliente e data/hora
    const appointmentExist = await prisma.appointment.findFirst({
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
    const appointment = await prisma.appointment.create({
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

export default CreateAppointmentService;

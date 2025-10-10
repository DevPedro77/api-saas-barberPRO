import prisma from "../../../../config/database";

class ListServiceAppointments {
  static async handle() {
    const appointments = await prisma.appointment.findMany({
      orderBy: {
        dateTime: "desc", // do mais recente para o mais antigo
      },
      select: {
        id: true,
        dateTime: true,
        status: true,
        service: {
          select: {
            name: true,
            price: true,
          },
        },
        customer: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    // Opcional: compactar ainda mais se quiser
    const compacted = appointments.map((a) => ({
      id: a.id,
      dateTime: a.dateTime,
      status: a.status,
      serviceName: a.service.name,
      servicePrice: a.service.price,
      customerName: a.customer.name,
      customerEmail: a.customer.email,
    }));

    return compacted;
  }
}

export default ListServiceAppointments;

import prisma from "../../../../config/database";

class ListServiceAppointments {
  static async handle() {
    const appointments = await prisma.appointment.findMany({
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

    return appointments;
  }
}


export default ListServiceAppointments;
import prisma from "../../../../config/database";

// Calcula datas de referência
const today = new Date();
const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0);
const endOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 0, 0, 0, 0);
const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1, 0, 0, 0, 0);
const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1, 0, 0, 0, 0);
const startOfYear = new Date(today.getFullYear(), 0, 1, 0, 0, 0, 0);
const endOfYear = new Date(today.getFullYear() + 1, 0, 1, 0, 0, 0, 0);

class ListService {
  async handle(){
    // Receita do mês
    const appointmentsMonth = await prisma.appointment.findMany({
      where: {
        dateTime: {
          gte: startOfMonth,
          lt: endOfMonth,
        },
      },
      include: { service: { select: { price: true } } },
    });
    const revenueMonth = appointmentsMonth.reduce((acc, curr) => acc + (curr.service?.price || 0), 0);

    // Receita de Hoje
    const appointmentsToday = await prisma.appointment.findMany({
      where: {
        dateTime: {
          gte: startOfToday,
          lt: endOfToday,
        },
      },
      include: { service: { select: { price: true } } },
    });
    const revenueToday = appointmentsToday.reduce((acc, curr) => acc + (curr.service?.price || 0), 0);

    // Agendamentos do dia
    const totalAppointmentsToday = appointmentsToday.length;

    // Serviços mais solicitados
    const mostRequestedServices = await prisma.appointment.groupBy({
      by: ['serviceId'],
      _count: {
        serviceId: true,
      },
      orderBy: {
        _count: {
          serviceId: 'desc',
        },
      },
      take: 5,
    });

    // Receita anual
    const appointmentsYear = await prisma.appointment.findMany({
      where: {
        dateTime: {
          gte: startOfYear,
          lt: endOfYear,
        },
      },
      include: { service: { select: { price: true } } },
    });
    const revenueYear = appointmentsYear.reduce((acc, curr) => acc + (curr.service?.price || 0), 0);

    // Próximos agendamentos
    const upcomingAppointments = await prisma.appointment.findMany({
      where: {
        dateTime: {
          gte: today,
        },
      },
      orderBy: {
        dateTime: 'asc',
      },
    });

    return {
      revenue: {
        month: revenueMonth,
        today: revenueToday,
        year: revenueYear,
      },
      appointments: {
        totalToday: totalAppointmentsToday,
        upcoming: upcomingAppointments,
      },
      mostRequestedServices,
    };
  }
}

export default ListService;
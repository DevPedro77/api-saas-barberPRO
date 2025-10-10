import prisma from "../../../../config/database";

// Preciso listar informacoes Descrição: Retorna uma visão geral com as principais métricas.
// Dados:

// Total de agendamentos (diário/mensal)

// Faturamento total (diário/mensal)

// Ticket médio

// Serviços mais vendidos


class ListService {
  async handle(){

  const totalAppointmentsDaily = await prisma.appointment.count({
    where: {
      dateTime: {
        gte: new Date(new Date().setHours(0, 0, 0, 0)), // Início do dia
        lt: new Date(new Date().setHours(23, 59, 59, 999)) // Fim do dia
      }
    }
  });

  const totalAppointmentsMonthly = await prisma.appointment.count({
    
  })
  }
}


export default ListService;
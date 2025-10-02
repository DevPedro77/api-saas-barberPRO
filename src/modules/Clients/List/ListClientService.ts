import prisma from "../../../config/database";

class ListClientService {
  async handle() {
    // lista todos os clientes
    const clients = await prisma.customer.findMany({
      orderBy: {
        createdAt: 'desc' // em caso de nomes iguais, ordena pela data de criação mais recente
      },
    });

    return clients;
  }
}

export default new ListClientService();
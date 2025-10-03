import prisma from "../../../../config/database";

class ListService {
  async execute() {
    const services = await prisma.service.findMany({
      select: {
        id: true,
        name: true,
        durationMin: true,
        price: true,
        createdAt: true,
      }
    });

    return services;
  }
}


export default new ListService();
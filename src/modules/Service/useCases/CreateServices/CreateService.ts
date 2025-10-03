import e from "express";
import prisma from "../../../../config/database";

interface CreateServiceData {
  name: string;
  price: number; // preço em centavos
  durationMin: number; // duração em minutos
}

class CreateService {
  async handle({ name, price, durationMin }: CreateServiceData) {

    // verifica se já existe serviço com esse nome
    const findService = await prisma.service.findFirst({
      where: { name },
    });

    if(!findService){
        const service = await prisma.service.create({
      data: {
        name,
        price,
        durationMin,
      },
    });
    return service;
  } else {
    throw new Error("Serviço já cadastrado com esse nome");
  }
}
}


export default new CreateService();
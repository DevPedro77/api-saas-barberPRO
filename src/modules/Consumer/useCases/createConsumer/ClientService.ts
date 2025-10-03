import prisma from "../../../../config/database";

interface CreateClientData {
  name: string;  
  phone: string; 
}

class ClientService {
  async handle({ name, phone }: CreateClientData) {
    // verificar se o cliente já agendou serviço
    const findClient = await prisma.customer.findFirst({
      where: { phone },
    });

    if(!findClient){
      // cria cliente no banco
      await prisma.customer.create({
        data: {
          name,          
          phone,          
        },
      });
      return;

    }

    return findClient;
  }
}

export default new ClientService();

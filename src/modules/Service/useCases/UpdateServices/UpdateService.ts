import prisma from "../../../../config/database";

interface UpdateService {
  id: string;
  name?: string;
  price?: number; // preço em centavo
  durationMin?: number; // duração em minutos
}


class UpdateServices {
  async handle({id, name, price, durationMin}: UpdateService){
    const service = await prisma.service.findUnique({
      where: { id }
    })


    if(service){
      const updatedService = await prisma.service.update({
        where: { id },
        data: {
          name: name || service.name,
          price: price !== undefined ? price : service.price,
          durationMin: durationMin !== undefined ? durationMin : service.durationMin,
        }
      });
      return updatedService;
    }
    else {
      throw new Error("Serviço não encontrado");
    }  
  }
}



export default new UpdateServices();
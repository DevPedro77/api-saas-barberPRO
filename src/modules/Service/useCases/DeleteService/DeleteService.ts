import prisma from "../../../../config/database";

interface DeleteService {
  id: string;
}


class DeleteServices {
  async handle({id}: DeleteService){


    const service = await prisma.service.findUnique({
      where: { id }
    })

    //Validando se o serviço existe
    if(!service){
      throw new Error("Serviço não encontrado");
    }

    // Verifica se há agendamentos associados ao serviço

    // delete service
    const deletedService = await prisma.service.delete({
      where: { id }
    })
    return deletedService;
  }
}


export default new DeleteServices();
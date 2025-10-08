import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🪴 Iniciando seed...");

  // Barbeiros (Users)
  const password = await hash("123456", 10);
  const barber1 = await prisma.user.create({
    data: {
      name: "Pedro Castro",
      email: "pedro@barberpro.com",
      passwordHash: password,
      role: "barber",
    },
  });

  const barber2 = await prisma.user.create({
    data: {
      name: "João Silva",
      email: "joao@barberpro.com",
      passwordHash: password,
      role: "barber",
    },
  });

  // Clientes
  const customer1 = await prisma.customer.create({
    data: {
      name: "Lucas Souza",
      email: "lucas@email.com",
      phone: "21999999999",
    },
  });

  const customer2 = await prisma.customer.create({
    data: {
      name: "Marcos Lima",
      email: "marcos@email.com",
      phone: "21988888888",
    },
  });

  const customer3 = await prisma.customer.create({
    data: {
      name: "Rafael Torres",
      email: "rafael@email.com",
      phone: "21977777777",
    },
  });

  // Serviços
  const service1 = await prisma.service.create({
    data: {
      name: "Corte de Cabelo",
      price: 50,
      durationMin: 30,
    },
  });

  const service2 = await prisma.service.create({
    data: {
      name: "Barba Completa",
      price: 40,
      durationMin: 25,
    },
  });

  const service3 = await prisma.service.create({
    data: {
      name: "Corte + Barba",
      price: 80,
      durationMin: 60,
    },
  });

  // Agendamentos
  await prisma.appointment.createMany({
    data: [
      {
        customerId: customer1.id,
        serviceId: service1.id,
        barberId: barber1.id,
        dateTime: new Date(Date.now() + 3600 * 1000 * 24), // amanhã
        status: "confirmed",
      },
      {
        customerId: customer2.id,
        serviceId: service2.id,
        barberId: barber2.id,
        dateTime: new Date(Date.now() + 3600 * 1000 * 48), // depois de amanhã
        status: "pending",
      },
      {
        customerId: customer3.id,
        serviceId: service3.id,
        barberId: barber1.id,
        dateTime: new Date(Date.now() + 3600 * 1000 * 72),
        status: "completed",
      },
    ],
  });

  console.log("✅ Seed finalizado com sucesso!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🪴 Iniciando seed...");

  // 🔹 Limpar tabelas para evitar duplicidade
  await prisma.appointment.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.user.deleteMany();
  await prisma.service.deleteMany();

  const password = await hash("123456", 10);

  // 🔹 Criando 4 barbeiros
  const barber1 = await prisma.user.create({ data: { name: "Pedro Castro", email: "pedro@barberpro.com", passwordHash: password, role: "barber" } });
  const barber2 = await prisma.user.create({ data: { name: "João Silva", email: "joao@barberpro.com", passwordHash: password, role: "barber" } });
  const barber3 = await prisma.user.create({ data: { name: "Marcos Vieira", email: "marcos@barberpro.com", passwordHash: password, role: "barber" } });
  const barber4 = await prisma.user.create({ data: { name: "Felipe Gomes", email: "felipe@barberpro.com", passwordHash: password, role: "barber" } });

  // 🔹 Criando 10 clientes
  const customers = [];
  for (let i = 1; i <= 10; i++) {
    const customer = await prisma.customer.create({
      data: {
        name: `Cliente ${i}`,
        email: `cliente${i}@email.com`,
        phone: `2199${Math.floor(1000000 + Math.random() * 8999999)}`
      }
    });
    customers.push(customer);
  }

  // 🔹 Criando 3 serviços
  const service1 = await prisma.service.create({ data: { name: "Corte de Cabelo", price: 50, durationMin: 30 } });
  const service2 = await prisma.service.create({ data: { name: "Barba Completa", price: 40, durationMin: 25 } });
  const service3 = await prisma.service.create({ data: { name: "Corte + Barba", price: 80, durationMin: 60 } });

  // 🔹 Criando 30 agendamentos aleatórios
  const statuses = ["completed", "confirmed", "pending", "cancelled"];
  const appointmentsData = [];

  for (let i = 0; i < 30; i++) {
    const customer = customers[Math.floor(Math.random() * customers.length)];
    const barber = [barber1, barber2, barber3, barber4][Math.floor(Math.random() * 4)];
    const service = [service1, service2, service3][Math.floor(Math.random() * 3)];
    const status = statuses[Math.floor(Math.random() * statuses.length)] ?? "pending";

    // Gera datas entre 1 e 30 de setembro 2025, horário entre 9h e 16h
    const day = (i % 30) + 1;
    const hour = 9 + (i % 8);
    const dateTime = new Date(`2025-09-${day.toString().padStart(2, "0")}T${hour.toString().padStart(2, "0")}:00:00Z`);

    if (customer && barber && service && status) {
      appointmentsData.push({
        customerId: customer.id,
        barberId: barber.id,
        serviceId: service.id,
        dateTime,
        status,
      });
    }
  }

  await prisma.appointment.createMany({ data: appointmentsData });

  console.log(`✅ Seed finalizado com sucesso! Criados:
  - 4 barbeiros
  - 10 clientes
  - 3 serviços
  - ${appointmentsData.length} agendamentos`);
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

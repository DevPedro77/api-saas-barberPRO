# BarberPRO - API SaaS para Barbearias

BarberPRO é uma API SaaS desenvolvida em Node.js com TypeScript, Express e Prisma ORM, focada na gestão de barbearias. O sistema permite o gerenciamento de usuários, clientes, serviços, agendamentos e fornece um dashboard com métricas essenciais para o negócio.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** + **TypeScript**
- **Express** (API REST)
- **Prisma ORM** (PostgreSQL)
- **JWT** para autenticação
- **Swagger** para documentação automática
- **bcrypt** para hash de senhas
- **dotenv** para variáveis de ambiente

---

## 📁 Estrutura de Pastas

```
api-saas-barberPRO/
│
├── prisma/
│   ├── schema.prisma      # Models do banco de dados
│   └── seed.ts            # (Opcional) Script para popular o banco
│
├── src/
│   ├── config/
│   │   ├── database.ts    # Instância do Prisma Client
│   │   └── swagger.ts     # Configuração do Swagger
│   │
│   ├── middlewares/
│   │   └── Auth.ts        # Middleware de autenticação JWT
│   │
│   ├── modules/
│   │   ├── Users/         # Usuários e autenticação
│   │   ├── Consumer/      # Clientes
│   │   ├── Service/       # Serviços
│   │   ├── Appointments/  # Agendamentos
│   │   └── Dashboard/     # Dashboard e métricas
│   │
│   ├── app.ts             # Configuração principal do Express e rotas
│   └── server.ts          # Inicialização do servidor
│
├── package.json
├── tsconfig.json
└── .env                   # Variáveis de ambiente
```

---

## 🗄️ Modelos do Banco (Prisma)

```prisma
model User {
  id           String   @id @default(uuid())
  name         String
  email        String   @unique
  passwordHash String
  role         String
  createdAt    DateTime @default(now())
  appointments Appointment[] @relation("BarberAppointments")
}

model Customer {
  id         String       @id @default(uuid())
  name       String
  email      String?
  phone      String
  createdAt  DateTime     @default(now())
  appointments Appointment[]
}

model Service {
  id           String       @id @default(uuid())
  name         String
  price        Float
  durationMin  Int
  createdAt    DateTime     @default(now())
  appointments Appointment[]
}

model Appointment {
  id         String    @id @default(uuid())
  customer   Customer  @relation(fields: [customerId], references: [id])
  customerId String
  service    Service   @relation(fields: [serviceId], references: [id])
  serviceId  String
  barber     User?     @relation("BarberAppointments", fields: [barberId], references: [id])
  barberId   String?
  dateTime   DateTime
  status     String
  createdAt  DateTime  @default(now())
}
```

---

## 🔐 Autenticação

- JWT (JSON Web Token) protege rotas sensíveis.
- Middleware de autenticação em `src/middlewares/Auth.ts`.

---

## 📊 Dashboard

Endpoint `/dashboard` retorna métricas como:

```json
{
  "revenue": {
    "month": 1000,
    "today": 100,
    "year": 12000
  },
  "appointments": {
    "totalToday": 5,
    "upcoming": [ /* próximos agendamentos */ ]
  },
  "mostRequestedServices": [ /* top 5 serviços mais agendados */ ]
}
```

---

## 🛣️ Principais Rotas

- `/users` - Cadastro e listagem de usuários
- `/auth/login` - Login de usuário
- `/customers` - Cadastro e listagem de clientes
- `/services` - CRUD de serviços
- `/appointments` - CRUD de agendamentos
- `/dashboard` - Métricas e relatórios

---

## 📝 Documentação

Acesse a documentação Swagger em:  
`http://localhost:3000/docs`

---

## ⚙️ Como rodar o projeto

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/api-saas-barberPRO.git
   cd api-saas-barberPRO
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   pnpm install
   ```

3. **Configure o arquivo `.env`**
   ```
   DATABASE_URL=postgresql://usuario:senha@localhost:5432/barberpro
   JWT_SECRET=sua_chave_secreta
   ```

4. **Rode as migrations do Prisma**
   ```bash
   npx prisma migrate dev
   ```

5. **(Opcional) Popule o banco**
   ```bash
   npx prisma db seed
   ```

6. **Inicie o servidor**
   ```bash
   npm run dev
   # ou
   pnpm dev
   ```

---

## 💡 Exemplo de Uso

### Cadastro de Usuário

```http
POST /users
Content-Type: application/json

{
  "name": "Barbeiro 1",
  "email": "barbeiro1@barberpro.com",
  "password": "senha123",
  "role": "barber"
}
```

### Login

```http
POST /auth/login
Content-Type: application/json

{
  "email": "barbeiro1@barberpro.com",
  "password": "senha123"
}
```

### Cadastro de Cliente

```http
POST /customers
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Cliente 1",
  "phone": "11999999999"
}
```

---

## 🏗️ Padrão de Código

- Separação por domínio (Users, Consumer, Service, Appointments, Dashboard)
- Controllers recebem requests, Services tratam regras de negócio
- Prisma para acesso ao banco
- Middleware para autenticação JWT

---

## 🧑‍💻 Contribuição

Pull requests são bem-vindos! Siga o padrão do projeto e descreva bem suas alterações.

---

## 📄 Licença

MIT

---

## ✉️ Contato



// src/config/swagger.ts
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';
import path from 'path';
import fs from 'fs';

// Função para listar apenas arquivos .ts
const getApiFiles = (dir: string): string[] => {
  const files: string[] = [];

  const readDirRecursive = (folder: string) => {
    const entries = fs.readdirSync(folder, { withFileTypes: true });
    entries.forEach((entry) => {
      const fullPath = path.join(folder, entry.name);
      if (entry.isDirectory()) {
        readDirRecursive(fullPath); // entra na subpasta
      } else if (entry.isFile() && fullPath.endsWith('.ts')) {
        files.push(fullPath);
      }
    });
  };

  readDirRecursive(dir);
  return files;
};

// Caminho para a pasta onde ficam os módulos com rotas
const apiFiles = getApiFiles(path.resolve(__dirname, '../modules'));

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API BarberPRO',
      version: '1.0.0',
      description: 'Documentação da API BarberPRO',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: apiFiles,
};

const specs = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
};

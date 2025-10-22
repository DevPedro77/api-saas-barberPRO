"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
// src/config/swagger.ts
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// Função para listar apenas arquivos .ts
const getApiFiles = (dir) => {
    const files = [];
    const readDirRecursive = (folder) => {
        const entries = fs_1.default.readdirSync(folder, { withFileTypes: true });
        entries.forEach((entry) => {
            const fullPath = path_1.default.join(folder, entry.name);
            if (entry.isDirectory()) {
                readDirRecursive(fullPath); // entra na subpasta
            }
            else if (entry.isFile() && fullPath.endsWith('.ts')) {
                files.push(fullPath);
            }
        });
    };
    readDirRecursive(dir);
    return files;
};
// Caminho para a pasta onde ficam os módulos com rotas
const apiFiles = getApiFiles(path_1.default.resolve(__dirname, '../modules'));
const options = {
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
const specs = (0, swagger_jsdoc_1.default)(options);
const setupSwagger = (app) => {
    app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
};
exports.setupSwagger = setupSwagger;
//# sourceMappingURL=swagger.js.map
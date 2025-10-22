"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UpdateService_1 = __importDefault(require("./UpdateService"));
/**
 * @swagger
 * /services/{id}:
 *   put:
 *     summary: Atualiza um serviço pelo ID
 *     tags: [Serviços]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do serviço
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               durationMin:
 *                 type: number
 *     responses:
 *       200:
 *         description: Serviço atualizado com sucesso
 *       404:
 *         description: Serviço não encontrado
 */
class UpdateController {
    async create(req, res) {
        // Pega o ID dos params
        const { id } = req.params;
        // Pega os dados do body
        const { name, price, durationMin } = req.body;
        try {
            // Validação básica
            if (!id) {
                return res.status(400).json({ error: "O id do serviço é obrigatório." });
            }
            if (!name && !price && !durationMin) {
                return res.status(400).json({ error: "Nenhum dado para atualização foi fornecido." });
            }
            const service = await UpdateService_1.default.handle({
                id,
                name,
                price,
                durationMin,
            });
            return res.status(200).json(service);
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            return res.status(400).json({ error: errorMessage });
        }
    }
}
exports.default = new UpdateController();
//# sourceMappingURL=UpdateController.js.map
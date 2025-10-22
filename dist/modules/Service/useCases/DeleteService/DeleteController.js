"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DeleteService_1 = __importDefault(require("../DeleteService/DeleteService"));
/**
 * @swagger
 * /services/{id}:
 *   delete:
 *     summary: Remove um serviço pelo ID
 *     tags: [Serviços]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do serviço
 *     responses:
 *       200:
 *         description: Serviço removido com sucesso
 *       404:
 *         description: Serviço não encontrado
 */
class DeleteController {
    async delete(req, res) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ error: "O id do serviço é obrigatório." });
        }
        try {
            const deletedService = await DeleteService_1.default.handle({ id });
            return res.status(200).json(deletedService);
        }
        catch (error) {
            const message = error instanceof Error ? error.message : 'Unknown error';
            if (message === "Serviço não encontrado") {
                return res.status(404).json({ error: message });
            }
            return res.status(500).json({ error: message });
        }
    }
}
exports.default = new DeleteController();
//# sourceMappingURL=DeleteController.js.map
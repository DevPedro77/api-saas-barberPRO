import { Request, Response } from 'express';
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
declare class UpdateController {
    create(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
declare const _default: UpdateController;
export default _default;
//# sourceMappingURL=UpdateController.d.ts.map
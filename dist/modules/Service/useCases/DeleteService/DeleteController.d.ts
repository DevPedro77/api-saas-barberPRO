import { Request, Response } from 'express';
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
declare class DeleteController {
    delete(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
declare const _default: DeleteController;
export default _default;
//# sourceMappingURL=DeleteController.d.ts.map
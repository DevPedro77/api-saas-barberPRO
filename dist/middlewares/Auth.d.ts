import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";
export interface AuthRequest extends Request {
    user?: string | JwtPayload;
}
export default function authMiddleware(req: AuthRequest, res: Response, next: NextFunction): void | Response<any, Record<string, any>>;
//# sourceMappingURL=Auth.d.ts.map
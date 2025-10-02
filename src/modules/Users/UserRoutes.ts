import { Router } from 'express';
import UserController from './UserController';

const router = Router();

router.post('/users', UserController.create);

export default router;

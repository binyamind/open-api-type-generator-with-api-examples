import { Router } from 'express';
import { createUser, getAllUsers } from '../../controllers/userController';

export const userRouter = Router();
userRouter.get('/users', getAllUsers);
userRouter.post('/users', createUser);

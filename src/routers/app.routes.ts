import { Router } from 'express';
import { productsRouter } from './productsRouter/products.router';
import { userRouter } from './usersRouter/user.router';

export const appRouter = Router();
appRouter.use(productsRouter);
appRouter.use(userRouter);

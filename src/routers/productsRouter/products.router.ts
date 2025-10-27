import { Router } from 'express';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  putProductById,
} from '../../controllers/productController';

export const productsRouter = Router();
productsRouter.get('/products', getAllProducts);
productsRouter.post('/products', createProduct);
productsRouter.get('/products/:id', getProductById);
productsRouter.put('/products/:id', putProductById);
productsRouter.delete('/products', deleteProduct);

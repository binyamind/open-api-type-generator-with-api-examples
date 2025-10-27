import { sampleProducts } from '../db/products.db';
import { Product } from '../models';

export const getAllProductsMapper = (someDbData: any[]): Product[] => {
  return sampleProducts as Product[];
};

import { Product } from '../models';

export const sampleProducts = [
  {
    id: '1',
    imageUrl: 'https://cdn.example.com/products/1.jpg',
    price: 20,
    productType: Product.ProductType.PRODUCT_SIMPLE,
    title: 'Basic T-Shirt',
    description: 'A comfortable basic T-shirt',
  },
  {
    id: '2',
    imageUrl: 'https://cdn.example.com/products/2.jpg',
    price: 49.99,
    productType: Product.ProductType.PRODUCT_VIP,
    title: 'VIP Leather Jacket',
    description: 'Premium leather jacket for VIP customers',
  },
  {
    id: '3',
    imageUrl: 'https://cdn.example.com/products/3.jpg',
    price: 5.49,
    productType: Product.ProductType.PRODUCT_SIMPLE,
    title: 'Notebook',
    description: 'Spiral-bound A5 notebook with 100 pages',
  },
];

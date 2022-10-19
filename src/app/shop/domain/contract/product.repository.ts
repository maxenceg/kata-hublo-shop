import { Product, ProductInput } from '../shop.types';

export interface ProductRepository {
  insertProduct(productInput: ProductInput): Product;
}

export const ProductRepository = Symbol('ProductRepository');

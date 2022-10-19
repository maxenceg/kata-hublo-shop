import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../domain/contract/product.repository';
import { Product, ProductInput } from '../domain/shop.types';

@Injectable()
export class InMemoryProductRepository implements ProductRepository {
  constructor() {}

  products: Product[] = [];

  insertProduct(productInput: ProductInput): Product {
    const { name, price, weight } = productInput;

    const lastId = this.products.reduce((acc, product) => {
      return Math.max(product.id, acc);
    }, 0);

    const product = { id: lastId + 1, name, price, weight };

    this.products.push(product);

    return product;
  }
}

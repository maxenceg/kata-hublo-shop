import { Inject, Injectable } from '@nestjs/common';
import { ProductResultDto } from '../controller/shop.dto';
import { ProductInput } from '../domain/shop.types';
import { ProductRepository } from '../domain/contract/product.repository';

@Injectable()
export class ShopService {
  constructor(
    @Inject(ProductRepository)
    private readonly productRepository: ProductRepository,
  ) {}

  addProduct(productInput: ProductInput): ProductResultDto {
    const { name } = productInput;

    if (name.length <= 3) {
      return {
        success: false,
        error: 'Product name must have at least three characters.',
        product: null,
      };
    }

    const product = this.productRepository.insertProduct(productInput);

    return { success: true, product };
  }
}

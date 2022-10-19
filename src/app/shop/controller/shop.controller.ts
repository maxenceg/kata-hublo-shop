import { Body, Controller, Post } from '@nestjs/common';
import { ShopService } from '../service/shop.service';
import { ProductResultDto } from './shop.dto';
import { ProductInput } from '../domain/shop.types';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Post('add-product')
  addProduct(@Body() productInput: ProductInput): ProductResultDto {
    return this.shopService.addProduct(productInput);
  }
}

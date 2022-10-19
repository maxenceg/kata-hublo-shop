import { Module } from '@nestjs/common';
import { ShopController } from './controller/shop.controller';
import { ProductRepository } from './domain/contract/product.repository';
import { InMemoryProductRepository } from './repository/shop.repository';
import { ShopService } from './service/shop.service';

@Module({
  imports: [],
  controllers: [ShopController],
  providers: [
    ShopService,
    { provide: ProductRepository, useClass: InMemoryProductRepository },
  ],
})
export class ShopModule {}

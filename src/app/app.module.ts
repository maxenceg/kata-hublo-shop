import { Module } from '@nestjs/common';
import { HealthController } from './health/controller/health.controller';
import { AppConfig } from './app.config';
import { ShopModule } from './shop/shop.module';

@Module({
  imports: [ShopModule],
  controllers: [HealthController],
  providers: [AppConfig],
})
export class AppModule {}

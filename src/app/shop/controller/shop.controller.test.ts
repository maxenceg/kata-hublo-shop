import { Test, TestingModule } from '@nestjs/testing';
import { ShopController } from './shop.controller';

describe('ShopController', () => {
  let appController: ShopController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ShopController],
      providers: [],
    }).compile();

    appController = app.get<ShopController>(ShopController);
  });

  describe('Shop check controller', () => {
    it('should return "ok"', () => {
      expect(appController.addProduct({ name: "hello", price: 42, weight: 12})).toBe('ok');
    });
  });
});

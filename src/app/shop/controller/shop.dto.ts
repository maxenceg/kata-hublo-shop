import { Product } from '../domain/shop.types';

export class ProductResultDto {
  success: boolean;
  error?: string;
  product: Product | null;
}

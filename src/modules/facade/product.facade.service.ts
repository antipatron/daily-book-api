import { Injectable } from '@nestjs/common';
import { ProductService } from '../service/product.service';

@Injectable()
export class ProductFacadeService {
  constructor(private readonly productService: ProductService) {
  }
}
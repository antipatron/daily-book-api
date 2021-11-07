import { Controller } from '@nestjs/common';
import { ProductFacadeService } from '../facade/product.facade.service';

@Controller('api/product')
export class ProductController {
  constructor(private readonly facade: ProductFacadeService) {}
}
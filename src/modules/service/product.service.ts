import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from '../repository/product.repository';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    private readonly repository: ProductRepository
  ) {}

  public async findProductsFilter(code: string, name: string, company: number) {
    return await this.repository.findProductsFilter(code, name, company);
  }
}

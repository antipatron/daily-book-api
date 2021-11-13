import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from '../repository/product.repository';
import { ProductEntity } from '../entity/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    private readonly repository: ProductRepository
  ) {}

  public async findProductsFilter(code: string, name: string, company: number) {
    return await this.repository.findProductsFilter(code, name, company);
  }

  public async find(id: number){
    return await this.repository.findOne(id);
  }

  public async save(product: ProductEntity): Promise<ProductEntity> {
    return await this.repository.save(product);
  }

  public async exists(id: number): Promise<boolean> {
    const result = await this.repository.findOne(id);
    return !!result
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProviderProductsRepository } from '../repository/provider-products.repository';
import { ProviderProductsEntity } from '../entity/provider-products.entity';

@Injectable()
export class ProviderProductsService {
  constructor(
    @InjectRepository(ProviderProductsRepository)
    private readonly repository: ProviderProductsRepository
  ) {}

  public async save(providerProductsEntity: ProviderProductsEntity): Promise<ProviderProductsEntity> {
    return await this.repository.save(providerProductsEntity);
  }

  public async findAllByIdProduct(id: number): Promise<Array<ProviderProductsEntity>> {
    return await this.repository.findAllByIdProduct(id)
  }

  public async exists(id: number): Promise<boolean> {
    const result = await this.repository.findOne(id);
    return !!result
  }

  public async findProductsProviderFilter(code: string, name: string, company: number, provider: string) {
    return await this.repository.findProductsProviderFilter(code, name, company, provider);
  }
}

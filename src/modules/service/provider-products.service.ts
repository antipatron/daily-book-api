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
}

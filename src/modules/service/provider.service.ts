import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProviderRepository } from '../repository/provider.repository';
import { ProductEntity } from "../entity/product.entity";
import { ProviderEntity } from "../entity/provider.entity";

@Injectable()
export class ProviderService {
  constructor(
    @InjectRepository(ProviderRepository)
    private readonly repository: ProviderRepository
  ) {}

  public async exists(id: number): Promise<boolean> {
    const result = await this.repository.findOne(id);
    return !!result
  }

  public async findProvidersFilter(seller: string, name: string, company: number) {
    return await this.repository.findProvidersFilter(seller, name, company);
  }

  public async save(provider: ProviderEntity): Promise<ProviderEntity> {
    return await this.repository.save(provider);
  }

  public async findByIdentifier(identifier: string): Promise<ProviderEntity>{
    return await this.repository.findOne({identifier});
  }

}

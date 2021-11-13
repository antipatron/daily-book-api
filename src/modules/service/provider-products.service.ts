import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProviderProductsRepository } from '../repository/provider-products.repository';

@Injectable()
export class ProviderProductsService {
  constructor(
    @InjectRepository(ProviderProductsRepository)
    private readonly repository: ProviderProductsRepository
  ) {}

  public async findProductsProviderFilter(code: string, name: string, company: number, provider: string) {
    return await this.repository.findProductsProviderFilter(code, name, company, provider);
  }

}

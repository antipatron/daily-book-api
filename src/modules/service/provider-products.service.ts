import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProviderProductsRepository } from '../repository/provider-products.repository';

@Injectable()
export class ProviderProductsService {
  constructor(
    @InjectRepository(ProviderProductsRepository)
    private readonly repository: ProviderProductsRepository
  ) {}
}
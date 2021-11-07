import { Injectable } from '@nestjs/common';
import { ProviderProductsService } from '../service/provider-products.service';

@Injectable()
export class ProviderProductsFacadeService {
  constructor(private readonly providerProductsService: ProviderProductsService) {
  }
}
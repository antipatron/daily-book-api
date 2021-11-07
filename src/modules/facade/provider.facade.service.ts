import { Injectable } from '@nestjs/common';
import { ProviderService } from '../service/provider.service';

@Injectable()
export class ProviderFacadeService {
  constructor(private readonly providerService: ProviderService) {
  }
}
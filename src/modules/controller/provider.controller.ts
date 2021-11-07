import { Controller } from '@nestjs/common';
import { ProviderFacadeService } from '../facade/provider.facade.service';

@Controller('api/provider')
export class ProviderController {
  constructor(private readonly facade: ProviderFacadeService) {}
}
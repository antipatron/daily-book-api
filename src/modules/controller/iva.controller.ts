import { Controller } from '@nestjs/common';
import { IvaFacadeService } from '../facade/iva.facade.service';

@Controller('api/iva')
export class IvaController {
  constructor(private readonly facade: IvaFacadeService) {}
}
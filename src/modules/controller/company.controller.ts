import { Controller } from '@nestjs/common';
import { CompanyFacadeService } from '../facade/company.facade.service';

@Controller('api/company')
export class CompanyController {
  constructor(private readonly facade: CompanyFacadeService) {}
}
import { Controller } from '@nestjs/common';
import { CompanyFacadeService } from '../facade/company.facade.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Company')
@Controller('api/company')
export class CompanyController {
  constructor(private readonly facade: CompanyFacadeService) {}
}
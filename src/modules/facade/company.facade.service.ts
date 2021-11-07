import { Injectable } from '@nestjs/common';
import { CompanyService } from '../service/company.service';

@Injectable()
export class CompanyFacadeService {
  constructor(private readonly companyService: CompanyService) {
  }
}
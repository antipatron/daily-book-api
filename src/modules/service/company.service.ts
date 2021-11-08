import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyRepository } from '../repository/company.repository';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(CompanyRepository)
    private readonly repository: CompanyRepository
  ) {}

  public async exists(id: number): Promise<boolean> {
    const result = await this.repository.findOne(id);
    return !!result
  }
}

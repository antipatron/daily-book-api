import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BrandRepository } from '../repository/brand.repository';
import { BrandEntity } from '../entity/brand.entity';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(BrandRepository)
    private readonly repository: BrandRepository
  ) {}

  public async getBrands():Promise<BrandEntity[]>{
    return await this.repository.find();
  }
}
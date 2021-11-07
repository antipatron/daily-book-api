import { Injectable } from '@nestjs/common';
import { BrandService } from '../service/brand.service';
import { BrandDto } from '../dto/brand.dto';

@Injectable()
export class BrandFacadeService {
  constructor(private readonly brandService: BrandService) {
  }

  public async getBrands(): Promise<BrandDto[]>{
    return await this.brandService.getBrands();
  }
}
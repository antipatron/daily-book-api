import { Controller, Get, HttpStatus } from '@nestjs/common';
import { BrandFacadeService } from '../facade/brand.facade.service';
import { StandardResponse } from '../../utils/http-response/standard-response';
import { BrandDto } from '../dto/brand.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Brands')
@Controller('api/brand')
export class BrandController {
  constructor(private readonly facade: BrandFacadeService) {}

  @Get()
  public async getBrands(): Promise<StandardResponse<BrandDto[]>> {
    return {
      status: HttpStatus.OK,
      body: await this.facade.getBrands()
    };
  }
}

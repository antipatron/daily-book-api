import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { ProductFacadeService } from '../facade/product.facade.service';
import { StandardResponse } from '../../utils/http-response/standard-response';

@Controller('api/product')
export class ProductController {
  constructor(private readonly facade: ProductFacadeService) {}

  @Get('/filter')
  public async findFiltered(@Query() query): Promise<StandardResponse<any[]>> {
    return {
      status: HttpStatus.OK,
      body: await this.facade.findProductsFilter(query['code'], query['name'], query['company'])
    };
  }


}

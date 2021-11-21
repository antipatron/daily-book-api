import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { StandardResponse } from '../../utils/http-response/standard-response';
import { ProviderProductsFacadeService } from '../facade/provider-products.facade.service';

@Controller('api/provider-products')
export class ProviderProductsController {

  constructor(private readonly providerProductsFacadeService: ProviderProductsFacadeService) {}

  @Get('/filter')
  public async findFiltered(@Query() query): Promise<StandardResponse<any[]>> {
    return {
      status: HttpStatus.OK,
      body: await this.providerProductsFacadeService.findProductsFilter(query['code'], query['name'], query['company'], query['provider'])
    };
  }
}

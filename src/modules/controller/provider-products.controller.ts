import { Controller, Delete, Get, HttpStatus, Param, Query } from '@nestjs/common';
import { StandardResponse } from '../../utils/http-response/standard-response';
import { ProviderProductsFacadeService } from '../facade/provider-products.facade.service';
import { ApiResponse } from '@nestjs/swagger';
import { MESSAGES_RESPONSE } from '../../utils/enums/messages-response.enum';

@Controller('api/product-provider')
export class ProviderProductsController {

  constructor(private readonly providerProductsFacadeService: ProviderProductsFacadeService) {}

  @Get('/filter')
  public async findFiltered(@Query() query): Promise<StandardResponse<any[]>> {
    return {
      status: HttpStatus.OK,
      body: await this.providerProductsFacadeService.findProductsFilter(query['code'], query['name'], query['company'], query['provider'])
    };
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Successful.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  public async deleteProductDetail(@Param('id') id: number): Promise<StandardResponse<any>> {
    return {
      status: HttpStatus.OK,
      message: MESSAGES_RESPONSE.DELETED,
      body: await this.providerProductsFacadeService.deleteProductDetail(id)
    };
  }
}

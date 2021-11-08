import { Body, Controller, Get, HttpStatus, Post, Query } from '@nestjs/common';
import { ProductFacadeService } from '../facade/product.facade.service';
import { StandardResponse } from '../../utils/http-response/standard-response';
import { ProductFullDto } from '../dto/product-full.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductDto } from '../dto/product.dto';

@ApiTags('Products')
@Controller('api/product')
export class ProductController {
  constructor(private readonly facade: ProductFacadeService) {}

  @Get('/filter')
  @ApiResponse({ status: 200, description: 'Successful.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiBody({
    description: 'List of products',
    type: ProductDto,
  })
  public async findFiltered(@Query() query): Promise<StandardResponse<any[]>> {
    return {
      status: HttpStatus.OK,
      body: await this.facade.findProductsFilter(query['code'], query['name'], query['company'])
    };
  }

  @Post()
  @ApiResponse({ status: 200, description: 'Successful.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiBody({
    description: 'Product created',
    type: ProductFullDto,
  })
  public async saveProductsFull(@Body() productFullDto: ProductFullDto): Promise<StandardResponse<any>> {
    return {
      status: HttpStatus.OK,
      body: await this.facade.saveProductsFull(productFullDto)
    };
  }
}

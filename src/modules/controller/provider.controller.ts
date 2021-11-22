import { Body, Controller, Delete, Get, HttpStatus, Param, Post,Put, Query } from '@nestjs/common';
import { ProviderFacadeService } from '../facade/provider.facade.service';
import { StandardResponse } from "../../utils/http-response/standard-response";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ProductDto } from "../dto/product.dto";
import { ProductDetailDto } from "../dto/product-detail.dto";
import { MESSAGES_RESPONSE } from "../../utils/enums/messages-response.enum";
import { ProviderDto } from "../dto/provider.dto";

@ApiTags('Providers')
@Controller('api/provider')
export class ProviderController {
  constructor(private readonly facade: ProviderFacadeService) {}

  @Get('/filter')
  @ApiResponse({ status: 200, description: 'Successful.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiBody({
    description: 'List of providers',
    type: ProductDto,
  })
  public async findFiltered(@Query() query): Promise<StandardResponse<any[]>> {
    return {
      status: HttpStatus.OK,
      body: await this.facade.findProvidersFilter(query['seller'], query['name'], query['company'])
    };
  }

  @Post()
  @ApiResponse({ status: 200, description: 'Successful.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiBody({
    description: 'Product created',
    type: ProductDetailDto,
  })
  public async saveProductsFull(@Body() providerDto: ProviderDto): Promise<StandardResponse<any>> {
    return {
      status: HttpStatus.OK,
      message: MESSAGES_RESPONSE.CREATED,
      body: await this.facade.saveProvider(providerDto)
    };
  }

  @Put()
  @ApiResponse({ status: 200, description: 'Successful.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiBody({
    description: 'Product updated',
    type: ProductDetailDto,
  })
  public async editProviders(@Body() providerDto: ProviderDto): Promise<StandardResponse<any>> {
    return {
      status: HttpStatus.OK,
      message: MESSAGES_RESPONSE.UPDATED,
      body: await this.facade.editProvider(providerDto)
    };
  }


  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Successful.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  public async deleteProvider(@Param('id') id: number): Promise<StandardResponse<any>> {
    return {
      status: HttpStatus.OK,
      message: MESSAGES_RESPONSE.DELETED,
      body: await this.facade.deleteProvider(id)
    };
  }

}

import { Controller, Get, HttpStatus, Query } from "@nestjs/common";
import { ProviderFacadeService } from '../facade/provider.facade.service';
import { StandardResponse } from "../../utils/http-response/standard-response";

@Controller('api/provider')
export class ProviderController {
  constructor(private readonly facade: ProviderFacadeService) {}

  @Get('/filter')
  public async findFiltered(@Query() query): Promise<StandardResponse<any[]>> {
    return {
      status: HttpStatus.OK,
      body: await this.facade.findProvidersFilter(query['seller'], query['name'], query['company'])
    };
  }

}

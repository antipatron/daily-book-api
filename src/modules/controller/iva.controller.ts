import { Controller, Get, HttpStatus } from '@nestjs/common';
import { IvaFacadeService } from '../facade/iva.facade.service';
import { StandardResponse } from '../../utils/http-response/standard-response';
import { IvaDto } from '../dto/iva.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Iva')
@Controller('api/iva')
export class IvaController {
  constructor(private readonly facade: IvaFacadeService) {}

  @Get()
  public async getIvas(): Promise<StandardResponse<IvaDto[]>> {
    return {
      status: HttpStatus.OK,
      body: await this.facade.getIvas()
    };
  }
}

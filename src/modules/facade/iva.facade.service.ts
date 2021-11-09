import { Injectable } from '@nestjs/common';
import { IvaService } from '../service/iva.service';
import { IvaDto } from '../dto/iva.dto';

@Injectable()
export class IvaFacadeService {
  constructor(private readonly ivaService: IvaService) {}

  public async getIvas(): Promise<IvaDto[]>{
    return await this.ivaService.getIvas();
  }
}

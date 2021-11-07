import { Injectable } from '@nestjs/common';
import { IvaService } from '../service/iva.service';

@Injectable()
export class IvaFacadeService {
  constructor(private readonly ivaService: IvaService) {
  }
}
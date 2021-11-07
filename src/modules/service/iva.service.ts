import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IvaRepository } from '../repository/iva.repository';

@Injectable()
export class IvaService {
  constructor(
    @InjectRepository(IvaRepository)
    private readonly repository: IvaRepository
  ) {}
}
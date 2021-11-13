import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IvaRepository } from '../repository/iva.repository';
import { IvaEntity } from '../entity/iva.entity';

@Injectable()
export class IvaService {
  constructor(
    @InjectRepository(IvaRepository)
    private readonly repository: IvaRepository
  ) {}

  public async getIvas():Promise<IvaEntity[]>{
    return await this.repository.find();
  }
}

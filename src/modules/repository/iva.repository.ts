import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { IvaEntity } from '../entity/iva.entity';

@EntityRepository(IvaEntity)
export class IvaRepository extends BaseRepository<IvaEntity> {}
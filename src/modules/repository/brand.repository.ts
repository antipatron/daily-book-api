import { EntityRepository } from 'typeorm';
import { BrandEntity } from '../entity/brand.entity';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';

@EntityRepository(BrandEntity)
export class BrandRepository extends BaseRepository<BrandEntity> {}
import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { ProviderEntity } from '../entity/provider.entity';

@EntityRepository(ProviderEntity)
export class ProviderRepository extends BaseRepository<ProviderEntity> {}
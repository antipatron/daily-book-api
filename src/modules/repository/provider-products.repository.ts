import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { ProviderProductsEntity } from '../entity/provider-products.entity';

@EntityRepository(ProviderProductsEntity)
export class ProviderProductsRepository extends BaseRepository<ProviderProductsEntity> {}
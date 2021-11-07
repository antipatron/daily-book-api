import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { RoleEntity } from '../entity/role.entity';

@EntityRepository(RoleEntity)
export class RoleRepository extends BaseRepository<RoleEntity> {}
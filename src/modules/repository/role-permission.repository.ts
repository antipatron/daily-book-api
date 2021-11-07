import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { RolePermissionEntity } from '../entity/role-permission.entity';

@EntityRepository(RolePermissionEntity)
export class RolePermissionRepository extends BaseRepository<RolePermissionEntity> {}
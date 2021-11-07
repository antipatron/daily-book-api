import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { PermissionEntity } from '../entity/permission.entity';

@EntityRepository(PermissionEntity)
export class PermissionRepository extends BaseRepository<PermissionEntity> {}
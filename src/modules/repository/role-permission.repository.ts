import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { RolePermissionEntity } from '../entity/role-permission.entity';
import { plainToClass } from 'class-transformer';
import { PermissionsByRolDto } from '../dto/permissions-by-rol.dto';

@EntityRepository(RolePermissionEntity)
export class RolePermissionRepository extends BaseRepository<RolePermissionEntity> {

  async getRolePermissionsByRoleId(roleId: number){
    const sqlQuery = this.createQueryBuilder('rolePermissions')
      .select('rolePermissions.id', 'id')

      .addSelect('rolePermissions.role_id', 'roleId')
      .addSelect('role.name', 'nameRole')
      .addSelect('role.description', 'descriptionRole')

      .addSelect('rolePermissions.permission_id', 'permissionId')
      .addSelect('permission.name', 'namePermission')
      .addSelect('permission.description', 'descriptionPermission')

      .innerJoin('rolePermissions.role', 'role')
      .innerJoin('rolePermissions.permission', 'permission')

      .where('rolePermissions.role_id = :roleId', {roleId: roleId})

    return await sqlQuery.getRawMany().then(items => plainToClass(PermissionsByRolDto, items));
  }
}
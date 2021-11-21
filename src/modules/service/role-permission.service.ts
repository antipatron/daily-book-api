import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RolePermissionRepository } from '../repository/role-permission.repository';

@Injectable()
export class RolePermissionService {
  constructor(
    @InjectRepository(RolePermissionRepository)
    private readonly repository: RolePermissionRepository
  ) {}

  public async getRolePermissionsByRoleId(roleId: number){
    return await this.repository.getRolePermissionsByRoleId(roleId);
  }
}
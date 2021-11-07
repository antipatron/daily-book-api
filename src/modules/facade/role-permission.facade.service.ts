import { Injectable } from '@nestjs/common';
import { RolePermissionService } from '../service/role-permission.service';

@Injectable()
export class RolePermissionFacadeService {
  constructor(private readonly rolePermissionService: RolePermissionService) {
  }
}
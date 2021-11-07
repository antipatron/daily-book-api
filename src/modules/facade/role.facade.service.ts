import { Injectable } from '@nestjs/common';
import { RoleService } from '../service/role.service';

@Injectable()
export class RoleFacadeService {
  constructor(private readonly roleService: RoleService) {
  }
}
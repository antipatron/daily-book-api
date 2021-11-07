import { Injectable } from '@nestjs/common';
import { PermissionService } from '../service/permission.service';

@Injectable()
export class PermissionFacadeService {
  constructor(private readonly permissionService: PermissionService) {
  }
}
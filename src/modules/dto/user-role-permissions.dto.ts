import { RoleDto } from './role.dto';
import { PermissionDto } from './permission.dto';

export class UserRolePermissionsDto {
  idUser: number;
  email: string;
  firstName: string;
  lastName: string;
  companyId: number;
  role: RoleDto;
  permissions: Array<PermissionDto>
}
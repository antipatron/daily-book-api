import { IsInt, IsOptional } from 'class-validator';

export class RolePermissionDto {
  @IsOptional()
  @IsInt()
  id: number;

  @IsInt()
  permissionId: number;

  @IsInt()
  roleId: number;
}
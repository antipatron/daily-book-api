import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class PermissionsByRolDto {
  @Expose()
  id: number;

  @Expose()
  roleId: number;

  @Expose()
  nameRole: string;

  @Expose()
  descriptionRole: string;

  @Expose()
  permissionId: number;

  @Expose()
  namePermission: string;

  @Expose()
  descriptionPermission: string;
}
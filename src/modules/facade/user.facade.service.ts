import { Injectable } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserDto } from '../dto/user.dto';
import { RolePermissionService } from '../service/role-permission.service';
import { PermissionsByRolDto } from '../dto/permissions-by-rol.dto';
import { UserRolePermissionsDto } from '../dto/user-role-permissions.dto';
import { RoleDto } from '../dto/role.dto';
import { PermissionDto } from '../dto/permission.dto';
import { RequestErrorException } from '../../utils/exception/request-error.exception';
import { MESSAGES_EXCEPTION } from '../../utils/exception/messages-exception.enum';
import { BusinessException } from '../../utils/exception/business.exception';

@Injectable()
export class UserFacadeService {
  constructor(private readonly userService: UserService,
              private readonly rolePermissionService: RolePermissionService) {}

  public async getUserWithRoleAndPermissionsByEmail(email: string){
    UserFacadeService.validateRequired(email);

    let user: UserDto = await this.userService.getUserByEmail(email);
    if(!user){
      throw new BusinessException(MESSAGES_EXCEPTION.USER_NOT_FOUND);
    }

    let rolePermissions: Array<PermissionsByRolDto> = await this.rolePermissionService.getRolePermissionsByRoleId(user.roleId);
    if(!rolePermissions || rolePermissions.length <= 0){
      throw new BusinessException(MESSAGES_EXCEPTION.PERMISSIONS_NOT_FOUND);
    }

    let userRolePermissions = new UserRolePermissionsDto();
    userRolePermissions.idUser = user.id;
    userRolePermissions.email = user.email;
    userRolePermissions.firstName = user.firstName;
    userRolePermissions.lastName = user.lastName;
    userRolePermissions.companyId = user.companyId;

    let roleDto = new RoleDto()
    roleDto.id = rolePermissions[0].roleId;
    roleDto.name = rolePermissions[0].nameRole;
    roleDto.description = rolePermissions[0].descriptionRole;
    userRolePermissions.role = roleDto;

    let permissionsDto: Array<PermissionDto> = [];
    rolePermissions.forEach(item =>{
      let permissionDto = new PermissionDto();
      permissionDto.id = item.permissionId;
      permissionDto.name = item.namePermission;
      permissionDto.description = item.descriptionPermission;
      permissionsDto.push(permissionDto);
    })
    userRolePermissions.permissions = permissionsDto;
    return userRolePermissions
  }

  private static validateRequired(field: any){
    if(!field){
      throw new RequestErrorException(MESSAGES_EXCEPTION.REQUEST_CLIENT_EXCEPTION);
    }
  }
}
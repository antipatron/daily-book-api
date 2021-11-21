import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { UserFacadeService } from '../facade/user.facade.service';
import { StandardResponse } from '../../utils/http-response/standard-response';
import { UserRolePermissionsDto } from '../dto/user-role-permissions.dto';

@Controller('api/user')
export class UserController {
  constructor(private readonly facade: UserFacadeService) {}

  @Get('/user-role-permissions/:email')
  public async getUserWithRoleAndPermissionsByEmail(@Param('email') email: string): Promise<StandardResponse<UserRolePermissionsDto>> {
    return {
      status: HttpStatus.OK,
      body: await this.facade.getUserWithRoleAndPermissionsByEmail(email)
    };
  }
}
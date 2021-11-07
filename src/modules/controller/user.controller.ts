import { Controller } from '@nestjs/common';
import { UserFacadeService } from '../facade/user.facade.service';

@Controller('api/user')
export class UserController {
  constructor(private readonly facade: UserFacadeService) {}
}
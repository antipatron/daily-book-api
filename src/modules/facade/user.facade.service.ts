import { Injectable } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Injectable()
export class UserFacadeService {
  constructor(private readonly userService: UserService) {
  }
}
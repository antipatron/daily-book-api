import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly repository: UserRepository
  ) {}

  public async getUserByEmail(email: string){
    return await this.repository.getUserByEmail(email);
  }
}
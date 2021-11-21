import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { UserEntity } from '../entity/user.entity';

@EntityRepository(UserEntity)
export class UserRepository extends BaseRepository<UserEntity> {

  async getUserByEmail(email: string){
    return await this.createQueryBuilder().where('email = :email', {email: email}).getOne();
  }
}
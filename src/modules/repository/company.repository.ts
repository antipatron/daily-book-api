import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { CompanyEntity } from '../entity/company.entity';

@EntityRepository(CompanyEntity)
export class CompanyRepository extends BaseRepository<CompanyEntity> {}
import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { ProviderEntity } from '../entity/provider.entity';

@EntityRepository(ProviderEntity)
export class ProviderRepository extends BaseRepository<ProviderEntity> {

  async findProvidersFilter(seller: string, name: string, company: number){
    name = !name? '':name;
    const sqlQuery = this.createQueryBuilder('provider')
      .select('provider.id', 'id')
      .addSelect('provider.identifier', 'identifier')
      .addSelect('provider.provider_name', 'providerName')
      .addSelect('provider.seller_name', 'sellerName')
      .addSelect('provider.address', 'address')
      .addSelect('provider.email', 'email')
      .addSelect('provider.phone_1', 'phoneOne')
      .addSelect('provider.phone_2', 'phoneTwo')
      .addSelect('provider.phone_3', 'phoneThree')
      .where('provider.company_id = :company', {company: company})
      .andWhere('ISNULL(:name) or provider.provider_name like :name', {name: '%'+name+'%'})
      .andWhere('ISNULL(:seller) or provider.seller_name like :seller', {seller: '%'+seller+'%'})

    return await sqlQuery.orderBy('provider.provider_name', 'ASC').getRawMany();
  }


}

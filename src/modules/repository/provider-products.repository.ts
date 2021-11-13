import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { ProviderProductsEntity } from '../entity/provider-products.entity';

@EntityRepository(ProviderProductsEntity)
export class ProviderProductsRepository extends BaseRepository<ProviderProductsEntity> {

  async findAllByIdProduct(idProduct: number){
    const sqlQuery = this.createQueryBuilder('productDetail')
      .select('productDetail.id', 'id')
      .addSelect('productDetail.provider_id', 'providerId')
      .addSelect('productDetail.product_id', 'productId')
      .addSelect('productDetail.net_price', 'netPrice')
      .addSelect('productDetail.sell_price', 'sellPrice')
      .addSelect('productDetail.timestamp', 'timestamp')
      .where('productDetail.product_id = :idProduct', {idProduct: idProduct})

    return await sqlQuery.getRawMany();
  }
}
import { EntityRepository } from "typeorm";
import { BaseRepository } from "typeorm-transactional-cls-hooked";
import { ProviderProductsEntity } from "../entity/provider-products.entity";

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

  async findProductsProviderFilter(code: string, name: string, company: number,provider: string){
    name = !name? '':name;
    provider = !provider?'':provider;
    const query = `
        select p.id, p.code, p.name, p.description, 
        (select b.name from brand b where b.id = p.brand_id) as nameBrand,
        ROUND((select i.value from iva i where i.id = p.iva_id),2) as valueIva,
        p.brand_id as brandId, p.iva_id as ivaId,p.company_id as companyId, 
        pp.id providerProductId, pp.net_price netPrice,pp.sell_price sellPrice, p2.provider_name providerName 
        from provider_products pp 
        right join product p on p.id =pp.product_id 
        left JOIN provider p2 on p2.id = pp.provider_id 
        WHERE (ISNULL(\'${name}\') OR p.name LIKE \'%${name}%\') and (ISNULL(\'${provider}\') OR p2.provider_name LIKE \'%${provider}%\') 
        and(ISNULL(?) OR p.code=?)  and  p.company_id = ? 
    `;

    const sqlQuery = await this.manager.query(query,[ code ,code,  company]);

    return  sqlQuery;
  }
}

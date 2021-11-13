import { EntityRepository } from "typeorm";
import { BaseRepository } from "typeorm-transactional-cls-hooked";
import { ProviderProductsEntity } from "../entity/provider-products.entity";

@EntityRepository(ProviderProductsEntity)
export class ProviderProductsRepository extends BaseRepository<ProviderProductsEntity> {


  async findProductsProviderFilter(code: string, name: string, company: number){
    name = !name? '':name;
    const query = `
        select p.id, p.code, p.name, p.description, p.brand_id, p.iva_id,p.company_id, 
        pp.id ppId, pp.net_price ,pp.sell_price, p2.provider_name 
        from provider_products pp 
        right join product p on p.id =pp.product_id 
        left JOIN provider p2 on p2.id = pp.provider_id 
        WHERE (ISNULL(\'${name}\') OR p.name LIKE \'%${name}%\') and (ISNULL(?) OR p.code=?)  and  p.company_id = ? 
    `;
    const sqlQuery = await this.manager.query(query,[ code ,code,  company]);

    return  sqlQuery;
  }

}

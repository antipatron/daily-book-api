import { EntityRepository } from 'typeorm/index';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { ProductEntity } from '../entity/product.entity';

@EntityRepository(ProductEntity)
export class ProductRepository extends BaseRepository<ProductEntity> {

  async findProductsFilter(code: string, name: string, company: number){
    name = !name? '':name;
    const sqlQuery = this.createQueryBuilder('product')
      .select('product.id', 'id')
      .addSelect('product.code', 'code')
      .addSelect('product.name', 'name')
      .addSelect('product.description', 'description')
      .addSelect('product.brand_id', 'brandId')
      .addSelect('product.iva_id', 'ivaId')
      .addSelect('product.company_id', 'companyId')
      .addSelect('brand.name', 'nameBrand')
      .addSelect('iva.value', 'valueIva')
      .leftJoin('product.brand', 'brand')
      .leftJoin('product.iva', 'iva')
      .where('product.company_id = :company', {company: company})
      .andWhere('(ISNULL(:name) or product.name like :name)', {name: '%'+name+'%'})
      .andWhere('(ISNULL(:code) or product.code = :code)', {code: code})

    return await sqlQuery.orderBy('product.name', 'ASC').getRawMany();
  }


}

import { Injectable } from '@nestjs/common';
import { ProductService } from '../service/product.service';
import { RequestErrorException } from '../../utils/exception/request-error.exception';
import { MESSAGES_EXCEPTION } from '../../utils/exception/messages-exception.enum';
import { ProductEntity } from '../entity/product.entity';
import { ProductFullDto } from '../dto/product-full.dto';
import { ProductDto } from '../dto/product.dto';
import { ProviderProductsService } from '../service/provider-products.service';
import { ProviderProductsEntity } from '../entity/provider-products.entity';
import { Transactional } from 'typeorm-transactional-cls-hooked';
import { ProviderService } from '../service/provider.service';
import { CompanyService } from '../service/company.service';

@Injectable()
export class ProductFacadeService {
  constructor(private readonly productService: ProductService,
              private readonly providerProductsService: ProviderProductsService,
              private readonly providerService: ProviderService,
              private readonly companyService: CompanyService) {}

  public async findProductsFilter(code: string, name: string, company: number) {
    ProductFacadeService.validateRequired(company)
    return await this.productService.findProductsFilter(code, name, company)
  }

  @Transactional()
  public async saveProductsFull(productFull: ProductFullDto): Promise<ProductDto> {
    ProductFacadeService.validateRequired(productFull.name)
    ProductFacadeService.validateRequired(productFull.companyId)
    ProductFacadeService.validateRequired(productFull.providerId)
    ProductFacadeService.validateRequired(productFull.timestamp)
    ProductFacadeService.validateRequired(await this.providerService.exists(productFull.providerId))
    ProductFacadeService.validateRequired(await this.companyService.exists(productFull.companyId))

    let product = new ProductEntity();
    product.code = productFull.code;
    product.name = productFull.name;
    product.description = productFull.description;
    product.brandId = productFull.brandId;
    product.ivaId = productFull.ivaId;
    product.companyId = productFull.companyId;
    let productSaved = await this.productService.save(product)

    let providerProduct = new ProviderProductsEntity();
    providerProduct.productId = productSaved.id;
    providerProduct.providerId = productFull.providerId;
    providerProduct.netPrice = productFull.netPrice;
    providerProduct.sellPrice = productFull.sellPrice;
    providerProduct.timestamp = productFull.timestamp;
    await this.providerProductsService.save(providerProduct)
    return productSaved;
  }

  private static validateRequired(field: any){
    if(!field){
      throw new RequestErrorException(MESSAGES_EXCEPTION.REQUEST_CLIENT_EXCEPTION);
    }
  }

}

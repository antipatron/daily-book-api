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
import { ProviderProductsDto } from '../dto/provider-products.dto';
import { ProductDetailDto } from '../dto/product-detail.dto';

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

  public async find(id: number): Promise<ProductFullDto> {
    ProductFacadeService.validateRequired(id)
    ProductFacadeService.validateRequired(await this.productService.exists(id))
    let product = await this.productService.find(id)
    let providerProducts: Array<ProviderProductsDto> = await this.providerProductsService.findAllByIdProduct(id)
    let productFullDto = new ProductFullDto()
    productFullDto.id = product.id;
    productFullDto.code = product.code;
    productFullDto.name = product.name;
    productFullDto.description = product.description;
    productFullDto.brandId = product.brandId;
    productFullDto.ivaId = product.ivaId;
    productFullDto.companyId = product.companyId;
    productFullDto.productDetail = providerProducts;
    return productFullDto
  }

  @Transactional()
  public async saveProductsFull(productFull: ProductFullDto): Promise<ProductDto> {
    ProductFacadeService.validateRequired(productFull.name)
    ProductFacadeService.validateRequired(productFull.companyId)
    ProductFacadeService.validateRequired(await this.companyService.exists(productFull.companyId))
    for (const productDetail of productFull.productDetail) {
      ProductFacadeService.validateRequired(productDetail.providerId)
      ProductFacadeService.validateRequired(productDetail.timestamp)
      ProductFacadeService.validateRequired(await this.providerService.exists(productDetail.providerId))
    }

    let product = new ProductEntity();
    product.code = productFull.code;
    product.name = productFull.name;
    product.description = productFull.description;
    product.brandId = productFull.brandId;
    product.ivaId = productFull.ivaId;
    product.companyId = productFull.companyId;
    let productSaved = await this.productService.save(product)

    for (const productDetail of productFull.productDetail) {
      let providerProduct = new ProviderProductsEntity();
      providerProduct.productId = productSaved.id;
      providerProduct.providerId = productDetail.providerId;
      providerProduct.netPrice = productDetail.netPrice;
      providerProduct.sellPrice = productDetail.sellPrice;
      providerProduct.timestamp = productDetail.timestamp;
      await this.providerProductsService.save(providerProduct)
    }
    return productSaved;
  }

  @Transactional()
  public async saveProductFull(productDetailDto: ProductDetailDto): Promise<ProductDto> {
    ProductFacadeService.validateRequired(productDetailDto.name)
    ProductFacadeService.validateRequired(productDetailDto.companyId)
    ProductFacadeService.validateRequired(await this.companyService.exists(productDetailDto.companyId))
    ProductFacadeService.validateRequired(productDetailDto.productDetail.providerId)
    ProductFacadeService.validateRequired(productDetailDto.productDetail.timestamp)
    ProductFacadeService.validateRequired(await this.providerService.exists(productDetailDto.productDetail.providerId))

    let product = new ProductEntity();
    product.code = productDetailDto.code;
    product.name = productDetailDto.name;
    product.description = productDetailDto.description;
    product.brandId = productDetailDto.brandId;
    product.ivaId = productDetailDto.ivaId;
    product.companyId = productDetailDto.companyId;
    let productSaved = await this.productService.save(product)

    let providerProduct = new ProviderProductsEntity();
    providerProduct.productId = productSaved.id;
    providerProduct.providerId = productDetailDto.productDetail.providerId;
    providerProduct.netPrice = productDetailDto.productDetail.netPrice;
    providerProduct.sellPrice = productDetailDto.productDetail.sellPrice;
    providerProduct.timestamp = productDetailDto.productDetail.timestamp;
    await this.providerProductsService.save(providerProduct)

    return productSaved;
  }

  private static validateRequired(field: any){
    if(!field){
      throw new RequestErrorException(MESSAGES_EXCEPTION.REQUEST_CLIENT_EXCEPTION);
    }
  }

}

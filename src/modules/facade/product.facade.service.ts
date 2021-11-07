import { Injectable } from '@nestjs/common';
import { ProductService } from '../service/product.service';
import { RequestErrorException } from '../../utils/exception/request-error.exception';
import { MESSAGES_EXCEPTION } from '../../utils/exception/messages-exception.enum';

@Injectable()
export class ProductFacadeService {
  constructor(private readonly productService: ProductService) {}

  public async findProductsFilter(code: string, name: string, company: number) {
    if(!company){
      throw new RequestErrorException(MESSAGES_EXCEPTION.REQUEST_CLIENT_EXCEPTION);
    }
    return await this.productService.findProductsFilter(code, name, company)
  }
}

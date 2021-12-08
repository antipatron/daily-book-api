import { Injectable } from '@nestjs/common';
import { ProviderProductsService } from '../service/provider-products.service';
import { RequestErrorException } from '../../utils/exception/request-error.exception';
import { MESSAGES_EXCEPTION } from '../../utils/exception/messages-exception.enum';

@Injectable()
export class ProviderProductsFacadeService {

  constructor(private readonly providerProductsService: ProviderProductsService) {}

  public async findProductsFilter(code: string, name: string, company: number, provider: string) {
    if(!company){
      throw new RequestErrorException(MESSAGES_EXCEPTION.REQUEST_CLIENT_EXCEPTION);
    }
    return await this.providerProductsService.findProductsProviderFilter(code, name, company, provider)
  }

  public async deleteProductDetail(id: number) {
    ProviderProductsFacadeService.validateRequired(id)
    ProviderProductsFacadeService.validateRequired(await this.providerProductsService.exists(id))
    return await this.providerProductsService.delete(id)
  }

  private static validateRequired(field: any){
    if(!field){
      throw new RequestErrorException(MESSAGES_EXCEPTION.REQUEST_CLIENT_EXCEPTION);
    }
  }
}

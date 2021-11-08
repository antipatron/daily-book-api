import { Injectable } from '@nestjs/common';
import { ProviderService } from '../service/provider.service';
import { RequestErrorException } from "../../utils/exception/request-error.exception";
import { MESSAGES_EXCEPTION } from "../../utils/exception/messages-exception.enum";

@Injectable()
export class ProviderFacadeService {
  constructor(private readonly providerService: ProviderService) {}

  public async findProvidersFilter(seller: string, name: string, company: number) {
    if(!company){
      throw new RequestErrorException(MESSAGES_EXCEPTION.REQUEST_CLIENT_EXCEPTION);
    }
    return await this.providerService.findProvidersFilter(seller, name, company)
  }

}

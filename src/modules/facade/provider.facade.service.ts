import { Injectable } from "@nestjs/common";
import { ProviderService } from "../service/provider.service";
import { RequestErrorException } from "../../utils/exception/request-error.exception";
import { MESSAGES_EXCEPTION } from "../../utils/exception/messages-exception.enum";
import { Transactional } from "typeorm-transactional-cls-hooked";
import { ProviderDto } from "../dto/provider.dto";
import { ProviderEntity } from "../entity/provider.entity";

@Injectable()
export class ProviderFacadeService {
  constructor(private readonly providerService: ProviderService) {}

  public async findProvidersFilter(seller: string, name: string, company: number) {
    if(!company){
      throw new RequestErrorException(MESSAGES_EXCEPTION.REQUEST_CLIENT_EXCEPTION);
    }
    return await this.providerService.findProvidersFilter(seller, name, company)
  }

  @Transactional()
  public async saveProvider(providerDto: ProviderDto): Promise<ProviderDto> {
    let providerSearch;
    if(providerDto.identifier){
       providerSearch= await this.providerService.findByIdentifier(providerDto.identifier)
    }

    if(providerSearch){
      throw new RequestErrorException(MESSAGES_EXCEPTION.DATA_DUPLICATE_EXCEPTION);
    }

    let providerEntity = new ProviderEntity();
    providerEntity.identifier=providerDto.identifier;
    providerEntity.providerName=providerDto.providerName
    providerEntity.sellerName=providerDto.sellerName
    providerEntity.address=providerDto.address
    providerEntity.email=providerDto.email
    providerEntity.phone1=providerDto.phone1
    providerEntity.phone2=providerDto.phone2
    providerEntity.phone3=providerDto.phone3
    providerEntity.companyId=providerDto.companyId

    let providerSaved = await this.providerService.save(providerEntity)
    return providerSaved;

  }

}

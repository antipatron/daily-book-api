import { IsInt, IsOptional, IsString } from 'class-validator';

export class ProviderDto {
  @IsOptional()
  @IsInt()
  id: number;

  @IsOptional()
  @IsString()
  identifier: string;

  @IsString()
  providerName: string;

  @IsString()
  sellerName: string;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  phone1: string;

  @IsOptional()
  @IsString()
  phone2: string;

  @IsOptional()
  @IsString()
  phone3: string;

  @IsInt()
  companyId: number;
}
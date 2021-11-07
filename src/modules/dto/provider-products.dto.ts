import { IsDate, IsInt, IsNumber, IsOptional } from 'class-validator';

export class ProviderProductsDto {
  @IsOptional()
  @IsInt()
  id: number;

  @IsInt()
  providerId: number;

  @IsInt()
  productId: number;

  @IsOptional()
  @IsNumber()
  netPrice: number;

  @IsOptional()
  @IsNumber()
  sellPrice: number;

  @IsDate()
  timestamp: Date;
}
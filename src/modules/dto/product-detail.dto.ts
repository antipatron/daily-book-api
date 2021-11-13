import { IsInt, IsObject, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ProviderProductsDto } from './provider-products.dto';

export class ProductDetailDto {
  @ApiProperty()
  @IsOptional()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  code: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  description: string;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  brandId: number;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  ivaId: number;

  @ApiProperty()
  @IsInt()
  companyId: number;

  @ApiProperty({type: ProviderProductsDto})
  @IsObject()
  productDetail: ProviderProductsDto;
}

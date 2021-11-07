import { IsInt, IsOptional, IsString } from 'class-validator';

export class ProductDto {
  @IsOptional()
  @IsInt()
  id: number;

  @IsOptional()
  @IsString()
  code: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsInt()
  brandId: number;

  @IsOptional()
  @IsInt()
  ivaId: number;

  @IsInt()
  companyId: number;
}
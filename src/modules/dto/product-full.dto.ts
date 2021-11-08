import { IsInt, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProductFullDto {
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

  @ApiProperty()
  @IsInt()
  providerId: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  providerName: string;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  netPrice: number;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  sellPrice: number;

  @ApiProperty()
  timestamp: Date;
}

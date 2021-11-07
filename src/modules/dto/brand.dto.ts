import { IsInt, IsOptional, IsString } from 'class-validator';

export class BrandDto {
  @IsOptional()
  @IsInt()
  id?: number;

  @IsString()
  name: string;
}
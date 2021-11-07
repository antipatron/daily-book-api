import { IsInt, IsOptional, IsString } from 'class-validator';

export class CompanyDto {
  @IsOptional()
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  identifier: string;

  @IsOptional()
  @IsString()
  description: string;
}
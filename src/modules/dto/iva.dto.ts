import { IsInt, IsNumber, IsOptional } from 'class-validator';

export class IvaDto {
  @IsOptional()
  @IsInt()
  id: number;

  @IsNumber()
  value: number;
}
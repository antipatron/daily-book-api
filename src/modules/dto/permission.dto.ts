import { IsInt, IsOptional, IsString } from 'class-validator';

export class PermissionDto {
  @IsOptional()
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;
}
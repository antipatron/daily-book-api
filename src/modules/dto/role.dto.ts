import { IsInt, IsOptional, IsString } from 'class-validator';

export class RoleDto {
  @IsOptional()
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsString()
  description: string;
}
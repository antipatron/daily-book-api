import { IsInt, IsOptional, IsString } from 'class-validator';

export class UserDto {
  @IsOptional()
  @IsInt()
  id: number;

  @IsString()
  email: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  password: string;

  @IsInt()
  roleId: number;

  @IsInt()
  companyId: number;
}
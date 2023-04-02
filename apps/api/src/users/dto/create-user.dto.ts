import { RoleEnum } from '@tutoreng/db/src';
import { UserCreateDto } from '@tutoreng/shared/src';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto implements UserCreateDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  mobileNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  surname: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ enum: RoleEnum })
  @IsNotEmpty()
  role: RoleEnum;
}

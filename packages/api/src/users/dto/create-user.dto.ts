import { Optional } from '@nestjs/common'
import { ApiProperty } from '@nestjs/swagger'

import { RoleEnum, SexEnum } from '@tutoreng/db'
import { UserCreateDto } from '@tutoreng/shared/src'
import { IsEmail, IsNotEmpty } from 'class-validator'

export class CreateUserDto implements UserCreateDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string

  @ApiProperty()
  @IsNotEmpty()
  name: string

  @ApiProperty()
  @IsNotEmpty()
  mobileNumber: string

  @ApiProperty({ enum: SexEnum })
  @IsNotEmpty()
  sex: SexEnum

  @ApiProperty()
  @Optional()
  surname: string

  @ApiProperty()
  @Optional()
  nickname?: string

  @ApiProperty()
  @IsNotEmpty()
  password: string

  @ApiProperty({ enum: RoleEnum })
  @IsNotEmpty()
  role: RoleEnum
}

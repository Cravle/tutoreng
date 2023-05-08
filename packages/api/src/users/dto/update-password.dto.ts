// update password dto
import { ApiProperty } from '@nestjs/swagger'

import { IsNotEmpty, IsString } from 'class-validator'

export class UpdatePasswordDto implements Readonly<UpdatePasswordDto> {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  oldPassword: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  newPassword: string
}

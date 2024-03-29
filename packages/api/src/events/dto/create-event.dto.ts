import { ApiProperty } from '@nestjs/swagger'

import { EventCreateDto } from '@tutoreng/shared/src/event/create.event.dto'
import { Transform } from 'class-transformer'
import { IsDate, IsNotEmpty } from 'class-validator'

export class CreateEventDto implements EventCreateDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  @Transform(({ value }) => new Date(value))
  dateFrom: Date

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  @Transform(({ value }) => new Date(value))
  dateTo: Date

  @ApiProperty()
  callUrl: string | null

  @ApiProperty()
  homeworkUrl: string | null

  @ApiProperty()
  teacherNotes: string | null

  @ApiProperty()
  studentNotes: string | null

  @ApiProperty()
  @IsNotEmpty()
  guests: string[]

  @ApiProperty()
  ownerId: string | null
}

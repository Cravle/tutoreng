import { EventCreateDto } from '@tutoreng/shared/src/event/create.event.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateEventDto implements EventCreateDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  @Transform(({ value }) => new Date(value))
  dateFrom: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  @Transform(({ value }) => new Date(value))
  dateTo: Date;

  @ApiProperty()
  zoomurl: string | null;

  @ApiProperty()
  homeworkUrl: string | null;

  @ApiProperty()
  teacherNotes: string | null;

  @ApiProperty()
  studentNotes: string | null;

  @ApiProperty()
  @IsNotEmpty()
  guests: string[];

  @ApiProperty()
  ownerId: string | null;
}

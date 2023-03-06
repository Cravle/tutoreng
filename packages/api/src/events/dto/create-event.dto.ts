import { EventCreateDto } from '@tutoreng/shared/src/event/create.event.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateEventDto implements EventCreateDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  ownerId: string;

  @ApiProperty()
  @IsNotEmpty()
  dateFrom: Date;

  @ApiProperty()
  @IsNotEmpty()
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
  gusts: string[];
}

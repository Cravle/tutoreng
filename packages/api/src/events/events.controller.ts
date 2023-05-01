import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common'

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import RequestWithUser from '../types/requestWithUser'

import { CreateEventDto } from './dto/create-event.dto'
import { UpdateEventDto } from './dto/update-event.dto'
import { EventsService } from './events.service'

@Controller('events')
@UseGuards(JwtAuthGuard)
export class EventsController {
  constructor(
    @Inject(EventsService)
    private readonly eventsService: EventsService,
  ) {}

  @Post()
  async create(
    @Body() createEventDto: CreateEventDto,
    @Req() request: RequestWithUser,
  ) {
    return this.eventsService.create(createEventDto, request.user)
  }

  @Get()
  async findAll() {
    return this.eventsService.findAll()
  }

  @Get('byUser')
  async findAllByUser(@Req() request: RequestWithUser) {
    return this.eventsService.findAllByUser(request.user)
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.eventsService.findOne(id)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.eventsService.delete(id)
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDto,
  ) {
    return this.eventsService.update(id, updateEventDto)
  }
}

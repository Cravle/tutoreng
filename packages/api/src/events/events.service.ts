import { Inject, Injectable, Req } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UsersService } from '../users/users.service';
import RequestWithUser from '../types/requestWithUser';

@Injectable()
export class EventsService {
  constructor(
    @Inject(PrismaService)
    private readonly prisma: PrismaService,
    @Inject(UsersService)
    private readonly usersService: UsersService,
  ) {}

  async create(createEventDto: CreateEventDto) {
    return this.prisma.scheduleEvent.create({ data: createEventDto });
  }

  async findAll() {
    return this.prisma.scheduleEvent.findMany();
  }
}

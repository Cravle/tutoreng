import { Module } from '@nestjs/common'

import { PrismaModule } from '../prisma/prisma.module'
import { UsersModule } from '../users/users.module'

import { EventsController } from './events.controller'
import { EventsService } from './events.service'

@Module({
  imports: [PrismaModule, UsersModule],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}

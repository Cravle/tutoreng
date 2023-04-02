import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [PrismaModule, UsersModule],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}

import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common'

import type { User } from '@tutoreng/db'

import { PrismaService } from '../prisma/prisma.service'
import { UsersService } from '../users/users.service'

import { CreateEventDto } from './dto/create-event.dto'
import { UpdateEventDto } from './dto/update-event.dto'
// check jwt
@Injectable()
export class EventsService {
  constructor(
    @Inject(PrismaService)
    private readonly prisma: PrismaService,
    @Inject(UsersService)
    private readonly usersService: UsersService,
  ) {}

  async create(createEventDto: CreateEventDto, user: User) {
    try {
      const { guests, ...event } = createEventDto
      const data = {
        ...event,
        ownerId: user.id,
        guests: {
          create: [
            ...guests.map((id) => ({
              user: {
                connect: { id },
              },
            })),
          ],
        },
      }
      return await this.prisma.scheduleEvent.create({
        data,
        include: { owner: true, guests: true },
      })
    } catch (e) {
      console.log(e)
      throw new HttpException(e, HttpStatus.BAD_REQUEST)
    }
  }

  async findAll() {
    return this.prisma.scheduleEvent.findMany({
      include: { owner: true, guests: true },
    })
  }

  async findAllByUser(userId: string) {
    const res = await this.prisma.scheduleEvent.findMany({
      where: {
        OR: [
          {
            ownerId: userId,
          },
          {
            guests: {
              some: {
                userId: userId,
              },
            },
          },
        ],
      },
      include: {
        owner: true,
        guests: { include: { user: true } },
      },
    })

    // const finalRes = await res.map(async (event) => {
    //   const guestsIds = event.guests.map((guest) => guest.userId)
    //   console.log(guestsIds, 'guestsIds')
    //   const guests = await this.usersService.findAllByIds(guestsIds)
    //   console.log(guests, 'guests')
    //   return {
    //     ...event,
    //     guests,
    //   }
    // })

    // console.log(finalRes, 'finalRes')

    return res
  }

  async delete(id: string) {
    try {
      await this.prisma.scheduleEvent.delete({ where: { id } })
    } catch (e) {
      Logger.error(e, 'Error deleting event')
      throw new HttpException(e, HttpStatus.BAD_REQUEST)
    }

    return { message: 'Event deleted ' + id }
  }

  findOne(id: string) {
    return this.prisma.scheduleEvent.findUnique({
      where: { id },
      include: { owner: true, guests: true },
    })
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    const currentEvent = await this.findOne(id)

    if (!currentEvent) {
      throw new HttpException('Event not found', HttpStatus.NOT_FOUND)
    }

    const { guests, ...event } = updateEventDto

    let data: any = {
      ...event,
    }

    if (guests) {
      data = {
        ...data,
        guests: {
          delete: currentEvent.guests.map((guest) => ({ id: guest.id })),
          create: [
            ...guests.map((id) => ({
              user: {
                connect: { id },
              },
            })),
          ],
        },
      }
    }
    try {
      const updatedUser = this.prisma.scheduleEvent.update({
        where: { id },
        data,
        include: { owner: true, guests: true },
      })
      return updatedUser
    } catch (e) {
      console.log(e)
      throw new HttpException(e, HttpStatus.BAD_REQUEST)
    }
  }
}

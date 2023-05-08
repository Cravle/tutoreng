import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common'

import type { User } from '@tutoreng/db'
import { compare, hash } from 'bcrypt'

import { PaginationResult } from '../prisma/pagination'
import { PaginationService } from '../prisma/pagintaion.service'
import { PrismaService } from '../prisma/prisma.service'

import { CreateUserDto } from './dto/create-user.dto'
import { UpdatePasswordDto } from './dto/update-password.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
  constructor(
    @Inject(PrismaService)
    private prisma: PrismaService,
    @Inject(PaginationService)
    private paginationService: PaginationService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const candidate = await this.prisma.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    })

    if (candidate) {
      throw new HttpException(
        'User with this email has already created',
        HttpStatus.BAD_REQUEST,
      )
    }
    const haashedPassword = await hash(createUserDto.password, 10)

    const data = {
      ...createUserDto,
      password: haashedPassword,
      balance: 0,
      isGraduated: false,
    }
    const user = await this.prisma.user.create({ data })
    Logger.log(user, 'User created')
    return user
  }

  async findAll(page: number, limit: number, search: string) {
    const where = search && {
      OR: [
        {
          name: {
            contains: search,
          },
        },
        {
          email: {
            contains: search,
          },
        },
        {
          surname: {
            contains: search,
          },
        },
      ],
    }

    const [users, count] = await this.prisma.$transaction([
      this.prisma.user.findMany({
        where,
        orderBy: {
          createdAt: 'desc',
        },
        ...this.paginationService.getParams(page, limit),
      }),
      this.prisma.user.count({ where }),
    ])

    return this.paginationService.paginate(users, count, page, limit, search)
  }

  async findAllByIds(ids: string[]) {
    return this.prisma.user.findMany({
      where: {
        id: {
          in: ids,
        },
      },
    })
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } })
    if (!user) {
      throw new HttpException(
        `There is no user with email:${email}`,
        HttpStatus.BAD_REQUEST,
      )
    }
    return user
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } })
    if (!user) {
      throw new HttpException(
        `There is no user with id: ${id}`,
        HttpStatus.BAD_REQUEST,
      )
    }
    return user
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    console.log(id, updateUserDto, 'id, updateUserDto')
    const user = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    })

    Logger.log('User updated', user)
    return user
  }

  async remove(id: string) {
    const candidate = await this.prisma.user.findUnique({ where: { id } })
    if (!candidate) {
      throw new HttpException(
        `There is no user with id: ${id}`,
        HttpStatus.BAD_REQUEST,
      )
    }

    try {
      this.prisma.user.delete({ where: { id } })
    } catch (e) {
      throw new HttpException(e, HttpStatus.BAD_REQUEST)
    }

    Logger.log('User deleted', candidate.id)

    return HttpStatus.OK
  }

  createUserResponse(user: User | User[] | PaginationResult<User>) {
    if (user instanceof PaginationResult) {
      return {
        ...user,
        data: this.createUserResponse(user.data),
      }
    }
    if (Array.isArray(user)) {
      return user.map((i) => {
        const withoutPassword = i
        delete withoutPassword.password
        return withoutPassword
      })
    }

    const withoutPassword = user
    delete withoutPassword.password
    return withoutPassword
  }

  async updatePassword(id: string, updatePasswordDto: UpdatePasswordDto) {
    const user = await this.prisma.user.findUnique({ where: { id } })
    console.log(user, 'user')
    console.log(updatePasswordDto, 'updatePasswordDto')

    const isValidPassword = await compare(
      updatePasswordDto.oldPassword,
      user.password,
    )

    if (!isValidPassword) {
      throw new HttpException(
        'Old password is not valid',
        HttpStatus.BAD_REQUEST,
      )
    }

    const newPassword = await hash(updatePasswordDto.newPassword, 10)

    return this.prisma.user.update({
      where: { id },
      data: { password: newPassword },
    })
  }
}

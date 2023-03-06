import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@tutoreng/db/src';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const candidate = await this.prisma.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    });
    console.log(candidate, candidate);

    if (candidate) {
      throw new HttpException(
        'User with this email has already created',
        HttpStatus.BAD_REQUEST,
      );
    }

    const data = {
      ...createUserDto,
      balance: 0,
      isGraduated: false,
    };
    const user = await this.prisma.user.create({ data });
    return user;
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    console.log(user, 'user');
    if (!user) {
      throw new HttpException(
        `There is no user with email:${email}`,
        HttpStatus.BAD_REQUEST,
      );
    }
    return user;
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new HttpException(
        `There is no user with id: ${id}`,
        HttpStatus.BAD_REQUEST,
      );
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: string) {
    const candidate = await this.prisma.user.findUnique({ where: { id } });
    console.log(candidate, 'candidate');
    if (!candidate) {
      throw new HttpException(
        `There is no user with id: ${id}`,
        HttpStatus.BAD_REQUEST,
      );
    }

    try {
      this.prisma.user.delete({ where: { id } });
    } catch (e) {
      throw new HttpException(e, HttpStatus.BAD_REQUEST);
    }
    return HttpStatus.OK;
  }

  createUserResponse(user: User | User[]) {
    if (Array.isArray(user)) {
      return user.map((i) => {
        const withoutPassword = i;
        delete withoutPassword.password;
        return withoutPassword;
      });
    }

    const withoutPassword = user;
    delete withoutPassword.password;
    return withoutPassword;
  }
}

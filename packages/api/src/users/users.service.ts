import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common';
import { hash } from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@tutoreng/db/src';
import { PaginationResult } from '../prisma/pagination';
import { PaginationService } from '../prisma/pagintaion.service';

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
    });

    if (candidate) {
      throw new HttpException(
        'User with this email has already created',
        HttpStatus.BAD_REQUEST,
      );
    }
    const haashedPassword = await hash(createUserDto.password, 10);

    const data = {
      ...createUserDto,
      password: haashedPassword,
      balance: 0,
      isGraduated: false,
    };
    const user = await this.prisma.user.create({ data });
    Logger.log(user, 'User created');
    return user;
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
    };

    const [users, count] = await this.prisma.$transaction([
      this.prisma.user.findMany({
        where,
        orderBy: {
          createdAt: 'desc',
        },
        ...this.paginationService.getParams(page, limit),
      }),
      this.prisma.user.count({ where }),
    ]);

    return this.paginationService.paginate(users, count, page, limit, search);
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
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
    const user = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });

    Logger.log('User updated', user);
    return user;
  }

  async remove(id: string) {
    const candidate = await this.prisma.user.findUnique({ where: { id } });
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

    Logger.log('User deleted', candidate.id);

    return HttpStatus.OK;
  }

  createUserResponse(user: User | User[] | PaginationResult<User>) {
    if (user instanceof PaginationResult) {
      return {
        ...user,
        data: this.createUserResponse(user.data),
      };
    }
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

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  // UseGuards,
} from '@nestjs/common'

import { RoleEnum } from '@tutoreng/db'

// import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { PaginateQuery } from '../types/paginateQuery'

import { CreateUserDto } from './dto/create-user.dto'
import { UpdatePasswordDto } from './dto/update-password.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UsersService } from './users.service'

@Controller('users')
// @UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const res = await this.usersService.create(createUserDto)
    return this.usersService.createUserResponse(res)
  }

  @Get()
  async findAll(@Query() query: PaginateQuery) {
    const res = await this.usersService.findAll(
      query.page,
      query.limit,
      query.search,
    )
    return this.usersService.createUserResponse(res)
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const res = await this.usersService.findOne(id)
    return this.usersService.createUserResponse(res)
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const res = await this.usersService.update(id, updateUserDto)

    return this.usersService.createUserResponse(res)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.usersService.remove(id)
  }

  // update password
  @Patch(':id/password')
  async updatePassword(
    @Param('id') id: string,
    @Body() updatePasswordDto: UpdatePasswordDto,
  ) {
    const res = await this.usersService.updatePassword(id, updatePasswordDto)
    return this.usersService.createUserResponse(res)
  }

  @Get('/role/:role')
  async findAllByRole(@Param('role') role: RoleEnum) {
    const res = await this.usersService.findAllByRole(role)
    return this.usersService.createUserResponse(res)
  }
}

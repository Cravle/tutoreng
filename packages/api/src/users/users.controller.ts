import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common'

import { PaginateQuery } from '../types/paginateQuery'

import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UsersService } from './users.service'

@Controller('users')
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
}

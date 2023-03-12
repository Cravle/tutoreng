import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const res = await this.usersService.create(createUserDto);
    return this.usersService.createUserResponse(res);
  }

  @Get()
  async findAll() {
    const res = await this.usersService.findAll();
    return this.usersService.createUserResponse(res);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const res = await this.usersService.findOne(id);
    return this.usersService.createUserResponse(res);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const res = await this.usersService.update(id, updateUserDto);

    return this.usersService.createUserResponse(res);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    try {
      const user = await this.userService.findByEmail(email);
      const isValidPassword = await compare(password, user.password);
      if (user && isValidPassword) {
        return user;
      }
    } catch (e) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }

    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, userId: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}

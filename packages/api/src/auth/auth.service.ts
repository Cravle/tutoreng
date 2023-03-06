import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
      if (user && user.password === password) {
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
    console.log(user);
    const payload = { email: user.email, userId: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}

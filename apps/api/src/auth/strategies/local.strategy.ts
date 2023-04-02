import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

Injectable();
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(AuthService)
    private authService: AuthService,
  ) {
    super({
      usernameField: 'email',
    });
  }

  async validate(email: string, password: string) {
    const user = await this.authService.validateUser(email, password);

    if (!user) {
      throw new HttpException(
        'User with this credentials does not exist',
        HttpStatus.BAD_REQUEST,
      );
    }
    return { ...user, userId: user.id };
  }
}

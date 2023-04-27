import { Controller, Inject, Post, Req, UseGuards } from '@nestjs/common'

import RequestWithUser from '../types/requestWithUser'

import { LocalAuthGuard } from './guards/local-auth.guard'
import { AuthService } from './auth.service'

@Controller()
export class AuthController {
  constructor(
    @Inject(AuthService)
    private readonly authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() request: RequestWithUser) {
    const user = request.user
    return {
      user,
      tokens: await this.authService.login(user),
    }
  }
}

import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleCallback(@Req() req: any) {
    const user = req.user;
    return this.authService.generateJwt(user);
  }

  @Get('profile')
  @UseGuards(AuthGuard('jwt'))
  async getProfile(@Req() req: any) {
    const user = await this.authService.findUserFromDb(req.user.userId);
    if (!user) {
      throw new UnauthorizedException('User no longer exists');
    }
    return user;
  }
  @Post('jwt')
  async getJwt(@Body() body: any) {
    const profile = body.profile;
    const user = await this.authService.validateGoogleUser(profile);
    return this.authService.generateJwt(user);
  }
}

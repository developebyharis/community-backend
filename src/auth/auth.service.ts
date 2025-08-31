import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { generateUsername } from './auth.helper';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
  ) {}

  async validateGoogleUser(profile: any) {
    console.log(profile);
    const email = profile.email;
    if (!email) {
      throw new Error('not a university email');
    }

    let user = await this.userService.findByEmail(email);
    if (!user) {
      let username = generateUsername(profile.name);

      while (await this.userService.findByUsername(username)) {
        username = generateUsername(profile.name);
      }
      user = await this.userService.create({
        name: profile.name,
        email,
        username,
        provider: 'google',
        avatar: profile.picture,
      });
    }
    return user;
  }
  async generateJwt(user: any) {
    const payload = {
      sub: user.id,
      email: user.email,
      username: user.username,
      role: user.role || 'USER',
    };
    return { accessToken: this.jwtService.sign(payload) };
  }
  async findUserFromDb(id: string) {
    return await this.userService.findUserById(id);
  }
}

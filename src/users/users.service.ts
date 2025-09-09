import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({ where: { email } });
  }
  async findByUsername(username: string) {
    return await this.prisma.user.findUnique({ where: { username } });
  }
  async findUserById(id: string) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async create(user: any) {
    return await this.prisma.user.create({ data: user });
  }
  async checkUser(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
}

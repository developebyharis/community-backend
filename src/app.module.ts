import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { CommunityModule } from './community/community.module';

@Module({
  imports: [AuthModule, PrismaModule, UsersModule, CommunityModule],
})
export class AppModule {}

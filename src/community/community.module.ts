import { Module } from '@nestjs/common';
import { CommunityService } from './community.service';
import { CommunityController } from './community.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  providers: [CommunityService],
  controllers: [CommunityController],
  imports: [UsersModule],
})
export class CommunityModule {}

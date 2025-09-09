import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { CommunityModule } from './community/community.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { VoteModule } from './vote/vote.module';
import { SavedService } from './saved/saved.service';
import { SavedModule } from './saved/saved.module';

@Module({
  imports: [AuthModule, PrismaModule, UsersModule, CommunityModule, PostModule, CommentModule, VoteModule, SavedModule],
  providers: [SavedService],
})
export class AppModule {}

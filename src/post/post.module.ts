import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { UsersModule } from '../users/users.module';

@Module({
  providers: [PostService],
  controllers: [PostController],
  imports: [UsersModule],
})
export class PostModule {}

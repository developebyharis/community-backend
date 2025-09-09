import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  providers: [CommentService],
  controllers: [CommentController],
    imports: [UsersModule],

})
export class CommentModule {}

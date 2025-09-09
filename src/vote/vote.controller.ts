import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { VoteService } from './vote.service';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { GetUser } from 'src/users/user.decorator';

@Controller('vote')
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @Post('post')
  @UseGuards(JwtAuthGuard)
  votePost(
    @GetUser('userId') userId: string,
    @Body('data') data: { value: number; postId: string },
  ) {
    return this.voteService.votePost(userId, data);
  }

  @Post('comment')
  @UseGuards(JwtAuthGuard)
  voteComment(
    @GetUser('userId') userId: string,
    @Body('data') data: { value: number; commentId: string },
  ) {
    return this.voteService.voteComment(userId, data);
  }
}

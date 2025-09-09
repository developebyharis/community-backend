import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { SavedService } from './saved.service';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { GetUser } from 'src/users/user.decorator';

@Controller('saved')
export class SavedController {
  constructor(private savedService: SavedService) {}

  @Post('/post')
  @UseGuards(JwtAuthGuard)
  savedPost(@GetUser('userId') userId: string, @Body('postId') postId: string) {
    return this.savedService.savedPost(userId, postId);
  }

  @Post('/comment')
  @UseGuards(JwtAuthGuard)
  savedComment(
    @GetUser('userId') userId: string,
    @Body('commentId') commentId: string,
  ) {
    return this.savedService.savedComment(userId, commentId);
  }

  @Get('/post')
  @UseGuards(JwtAuthGuard)
  getMySavedPost(@GetUser('userId') userId: string) {
    return this.savedService.getMySavedPost(userId);
  }
  @Get('/comment')
  @UseGuards(JwtAuthGuard)
  getMySavedComment(@GetUser('userId') userId: string) {
    return this.savedService.getMySavedComment(userId);
  }
}

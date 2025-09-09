import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { GetUser } from 'src/users/user.decorator';
import { CreateCommentDto, UpdateCommentDto } from './dto/comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post('me')
  @UseGuards(JwtAuthGuard)
  createComment(
    @GetUser('userId') userId: string,
    @Body() data: CreateCommentDto,
  ) {
    return this.commentService.createComment(userId, data);
  }

  @Get('post/:postId')
  getCommentsByPost(@Param('postId') postId: string) {
    return this.commentService.getCommentsByPost(postId);
  }

  @Get(':id')
  getCommentById(@Param('id') id: string) {
    return this.commentService.getCommentById(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  updateComment(
    @GetUser('userId') userId: string,
    @Param('id') id: string,
    @Body() data: UpdateCommentDto,
  ) {
    return this.commentService.updateComment(userId, { ...data, id });
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  deleteComment(@GetUser('userId') userId: string, @Param('id') id: string) {
    return this.commentService.deleteComment(userId, id);
  }
}

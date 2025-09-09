import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { PostService } from './post.service';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { GetUser } from 'src/users/user.decorator';
import { CreatePostDTO } from './dto/create-post.dto';
import { UpdatePostDTO } from './dto/update-post.dto';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Post('me')
  @UseGuards(JwtAuthGuard)
  createPost(@GetUser('userId') userId: string, @Body() data: CreatePostDTO) {
    return this.postService.createPost(userId, data);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  fetchMyPost(@GetUser('userId') userId: string) {
    return this.postService.getMyPost(userId);
  }
  @Patch('me/:id')
  @UseGuards(JwtAuthGuard)
  updatePost(@Param('id') id: string, @Body() data: UpdatePostDTO) {
    return this.postService.updatePost(id, data);
  }
  @Delete('me/:id')
  @UseGuards(JwtAuthGuard)
  deletePost(@Param('id') id: string) {
    return this.postService.deletePost(id);
  }

  @Get()
  fetchAllPost() {
    return this.postService.getAllPost();
  }
}

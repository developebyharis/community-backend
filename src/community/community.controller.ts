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
import { CommunityService } from './community.service';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { GetUser } from 'src/users/user.decorator';
import { CreateCommunityDto } from './dto/create-community.dto';
import { UpdateCommunityDto } from './dto/update-community.dto';

@Controller('community')
export class CommunityController {
  constructor(private communityService: CommunityService) {}

  @Get('me')
  @UseGuards(JwtAuthGuard)
  fetchMyCommunity(@GetUser('userId') userId: string) {
    return {
      myCommunities: this.communityService.getMyCommunity(userId),
      myFollowedCommunities:
        this.communityService.getUserFollowedCommunities(userId),
    };
  }

  @Post('me')
  @UseGuards(JwtAuthGuard)
  createCommunity(
    @GetUser('userId') userId: string,
    @Body() data: CreateCommunityDto,
  ) {
    return this.communityService.createCommunity(userId, data);
  }

  @Get()
  fetchAllCommunities() {
    return this.communityService.getAllCommunities();
  }

  @Patch('follow/:id')
  @UseGuards(JwtAuthGuard)
  followCommunity(
    @GetUser('userId') userId: string,
    @Param('id') communityId: string,
  ) {
    return this.communityService.followCommunity(userId, communityId);
  }

  @Patch('unfollow/:id')
  @UseGuards(JwtAuthGuard)
  unfollowCommunity(
    @GetUser('userId') userId: string,
    @Param('id') communityId: string,
  ) {
    return this.communityService.unfollowCommunity(userId, communityId);
  }

  @Patch('me/:id')
  @UseGuards(JwtAuthGuard)
  updateCommunity(@Body() data: UpdateCommunityDto, @Param('id') id: string) {
    return this.communityService.updateCommunity(data, id);
  }
  @Delete('me/:id')
  @UseGuards(JwtAuthGuard)
  deleteCommunity(@Param('id') id: string) {
    return this.communityService.deleteCommunity(id);
  }
}

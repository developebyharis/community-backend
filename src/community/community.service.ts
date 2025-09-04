import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCommunityDto } from './dto/create-community.dto';
import { UpdateCommunityDto } from './dto/update-community.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class CommunityService {
  constructor(
    private prisma: PrismaService,
    private readonly userService: UsersService,
  ) {}

  async checkCommunity(communityName: string) {
    const community = await this.prisma.community.findUnique({
      where: { communityName },
    });
    if (!community) throw new NotFoundException('Community not found');
    return community;
  }
  async ensureCommunityNameUnique(communityName: string) {
    const community = await this.prisma.community.findUnique({
      where: { communityName },
    });
    if (community) throw new ConflictException('Community name already exists');
  }

  async createCommunity(userId: string, data: CreateCommunityDto) {
    await this.ensureCommunityNameUnique(data.communityName);
    const community = await this.prisma.community.create({
      data: {
        communityName: data.communityName,
        description: data.description,
        public: data.public,
        topics: data.topics,
        createdById: userId,
      },
    });
    return {
      success: true,
      message: 'Community created successfully',
      data: community,
    };
  }

  async getMyCommunity(userId: string) {
    await this.userService.checkUser(userId);

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        communities: true,
      },
    });

    if (!user) {
      throw new BadRequestException({
        success: false,
        message: 'No communities found for this user',
        errorCode: 'NO_COMMUNITIES_FOUND',
      });
    }

    return {
      success: true,
      message: 'Communities Found',
      data: user.communities,
    };
  }

  async getAllCommunities() {
    const community = await this.prisma.community.findMany({
      include: {
        followers: true,
      },
    });
    if (!community) {
      throw new BadRequestException({
        success: false,
        message: 'No Community Found',
        errorCode: 'COMMUNITY_NOT_FOUND',
      });
    }
    return {
      success: true,
      message: 'Community Found',
      data: community,
    };
  }

  async getUserFollowedCommunity(userId: string) {
    await this.userService.checkUser(userId);

    const community = this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        followed: true,
      },
    });

    if (!community) {
      throw new BadRequestException({
        success: false,
        message: 'No communities found for this user',
        errorCode: 'NO_COMMUNITIES_FOUND',
      });
    }
    return {
      success: true,
      message: 'Community Found',
      data: community,
    };
  }

  async updateCommunity(data: UpdateCommunityDto, communityId: string) {
    const community = this.prisma.community.update({
      where: { id: communityId },
      data: {
        ...data,
      },
    });
    if (!community) {
      throw new BadRequestException({
        success: false,
        message: 'Community not updated',
        errorCode: 'COMMUNITY_NOT_UPDATED',
      });
    }
    return {
      success: true,
      message: 'Community updated successfully',
      data: community,
    };
  }

  async deleteCommunity(communityId: string) {
    const community = this.prisma.community.delete({
      where: { id: communityId },
    });
    if (!community) {
      throw new BadRequestException({
        success: false,
        message: 'Community not deleted',
        errorCode: 'COMMUNITY_NOT_DELETED',
      });
    }
    return {
      success: true,
      message: 'Community deleted successfully',
      data: community,
    };
  }

  async followCommunity(userId: string, communityId: string) {
    const community = await this.prisma.community.findUnique({
      where: { id: communityId },
    });
    if (!community) throw new NotFoundException('Community not found');

    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: {
        followed: {
          connect: { id: communityId },
        },
      },
      include: { followed: true },
    });

    return {
      success: true,
      message: 'Community followed successfully',
      data: updatedUser.followed,
    };
  }

  async unfollowCommunity(userId: string, communityId: string) {
    const community = await this.prisma.community.findUnique({
      where: { id: communityId },
    });
    if (!community) throw new NotFoundException('Community not found');

    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: {
        followed: {
          disconnect: { id: communityId },
        },
      },
      include: { followed: true },
    });

    return {
      success: true,
      message: 'Community unfollowed successfully',
      data: updatedUser.followed,
    };
  }
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const users_service_1 = require("../users/users.service");
let CommunityService = class CommunityService {
    prisma;
    userService;
    constructor(prisma, userService) {
        this.prisma = prisma;
        this.userService = userService;
    }
    async checkCommunity(communityName) {
        const community = await this.prisma.community.findUnique({
            where: { communityName },
        });
        if (!community)
            throw new common_1.NotFoundException('Community not found');
        return community;
    }
    async ensureCommunityNameUnique(communityName) {
        const community = await this.prisma.community.findUnique({
            where: { communityName },
        });
        if (community)
            throw new common_1.ConflictException('Community name already exists');
    }
    async createCommunity(userId, data) {
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
    async getAllCommunities() {
        const communities = await this.prisma.community.findMany({
            include: {
                followers: { select: { id: true, username: true } },
                createdBy: { select: { id: true, username: true } },
            },
        });
        if (!communities || communities.length === 0) {
            throw new common_1.BadRequestException({
                success: false,
                message: 'No Community Found',
                errorCode: 'COMMUNITY_NOT_FOUND',
            });
        }
        const cleanData = communities.map((c) => ({
            id: c.id,
            communityName: c.communityName,
            description: c.description,
            creator: {
                id: c.createdBy.id,
                username: c.createdBy.username,
            },
            membersCount: c.followers.length,
            members: c.followers.map((f) => ({
                id: f.id,
                username: f.username,
            })),
            onlineMembers: c.followers.filter((f) => Math.random() > 0.5).length,
            createdAt: c.createdAt,
        }));
        return {
            success: true,
            message: 'Communities Found',
            data: cleanData,
        };
    }
    async getMyCommunity(userId) {
        await this.userService.checkUser(userId);
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            include: {
                communities: true,
            },
        });
        if (!user) {
            throw new common_1.BadRequestException({
                success: false,
                message: 'You have no community',
                errorCode: 'NO_COMMUNITIES_FOUND',
            });
        }
        return {
            success: true,
            message: 'Communities Found',
            data: user.communities,
        };
    }
    async getUserFollowedCommunities(userId) {
        await this.userService.checkUser(userId);
        const communities = await this.prisma.community.findMany({
            where: {
                followers: {
                    some: {
                        id: userId,
                    },
                },
            },
            include: {
                followers: true,
                createdBy: true,
            },
        });
        if (!communities || communities.length === 0) {
            throw new common_1.BadRequestException({
                success: false,
                message: 'You have no following communities',
                errorCode: 'NO_COMMUNITIES_FOUND',
            });
        }
        return {
            success: true,
            message: 'Communities found',
            data: communities,
        };
    }
    async updateCommunity(data, communityId) {
        const community = this.prisma.community.update({
            where: { id: communityId },
            data: {
                ...data,
            },
        });
        if (!community) {
            throw new common_1.BadRequestException({
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
    async deleteCommunity(communityId) {
        const community = this.prisma.community.delete({
            where: { id: communityId },
        });
        if (!community) {
            throw new common_1.BadRequestException({
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
    async followCommunity(userId, communityId) {
        const community = await this.prisma.community.findUnique({
            where: { id: communityId },
        });
        if (!community)
            throw new common_1.NotFoundException('Community not found');
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
    async unfollowCommunity(userId, communityId) {
        const community = await this.prisma.community.findUnique({
            where: { id: communityId },
        });
        if (!community)
            throw new common_1.NotFoundException('Community not found');
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
};
exports.CommunityService = CommunityService;
exports.CommunityService = CommunityService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        users_service_1.UsersService])
], CommunityService);
//# sourceMappingURL=community.service.js.map
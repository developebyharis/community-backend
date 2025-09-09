import { PrismaService } from '../prisma/prisma.service';
import { CreateCommunityDto, UpdateCommunityDto } from './dto/community.dto';
import { UsersService } from 'src/users/users.service';
export declare class CommunityService {
    private prisma;
    private readonly userService;
    constructor(prisma: PrismaService, userService: UsersService);
    checkCommunity(communityName: string): Promise<{
        id: string;
        communityName: string;
        description: string;
        public: boolean;
        topics: string[];
        createdById: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    ensureCommunityNameUnique(communityName: string): Promise<void>;
    createCommunity(userId: string, data: CreateCommunityDto): Promise<{
        success: boolean;
        message: string;
        data: {
            id: string;
            communityName: string;
            description: string;
            public: boolean;
            topics: string[];
            createdById: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    getAllCommunities(): Promise<{
        success: boolean;
        message: string;
        data: {
            id: string;
            communityName: string;
            description: string;
            creator: {
                id: string;
                username: string;
            };
            membersCount: number;
            members: {
                id: string;
                username: string;
            }[];
            onlineMembers: number;
            createdAt: Date;
        }[];
    }>;
    getMyCommunity(userId: string): Promise<{
        success: boolean;
        message: string;
        data: {
            id: string;
            communityName: string;
            description: string;
            public: boolean;
            topics: string[];
            createdById: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
    }>;
    getUserFollowedCommunities(userId: string): Promise<{
        success: boolean;
        message: string;
        data: ({
            createdBy: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                email: string;
                username: string;
                avatar: string | null;
                role: import("@prisma/generated").$Enums.Role;
                provider: string;
                universityId: string | null;
                publicKey: string | null;
            };
            followers: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                email: string;
                username: string;
                avatar: string | null;
                role: import("@prisma/generated").$Enums.Role;
                provider: string;
                universityId: string | null;
                publicKey: string | null;
            }[];
        } & {
            id: string;
            communityName: string;
            description: string;
            public: boolean;
            topics: string[];
            createdById: string;
            createdAt: Date;
            updatedAt: Date;
        })[];
    }>;
    updateCommunity(data: UpdateCommunityDto, communityId: string): Promise<{
        success: boolean;
        message: string;
        data: import("@prisma/generated").Prisma.Prisma__CommunityClient<{
            id: string;
            communityName: string;
            description: string;
            public: boolean;
            topics: string[];
            createdById: string;
            createdAt: Date;
            updatedAt: Date;
        }, never, import("@prisma/generated/runtime/library").DefaultArgs, import("@prisma/generated").Prisma.PrismaClientOptions>;
    }>;
    deleteCommunity(communityId: string): Promise<{
        success: boolean;
        message: string;
        data: import("@prisma/generated").Prisma.Prisma__CommunityClient<{
            id: string;
            communityName: string;
            description: string;
            public: boolean;
            topics: string[];
            createdById: string;
            createdAt: Date;
            updatedAt: Date;
        }, never, import("@prisma/generated/runtime/library").DefaultArgs, import("@prisma/generated").Prisma.PrismaClientOptions>;
    }>;
    followCommunity(userId: string, communityId: string): Promise<{
        success: boolean;
        message: string;
        data: {
            id: string;
            communityName: string;
            description: string;
            public: boolean;
            topics: string[];
            createdById: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
    }>;
    unfollowCommunity(userId: string, communityId: string): Promise<{
        success: boolean;
        message: string;
        data: {
            id: string;
            communityName: string;
            description: string;
            public: boolean;
            topics: string[];
            createdById: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
    }>;
}

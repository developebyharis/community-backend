import { CommunityService } from './community.service';
import { CreateCommunityDto, UpdateCommunityDto } from './dto/community.dto';
export declare class CommunityController {
    private communityService;
    constructor(communityService: CommunityService);
    fetchMyCommunity(userId: string): Promise<{
        myCommunities: {
            success: boolean;
            message: string;
            data: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                communityName: string;
                description: string;
                public: boolean;
                topics: string[];
                createdById: string;
            }[];
        };
        myFollowedCommunities: {
            success: boolean;
            message: string;
            data: ({
                createdBy: {
                    id: string;
                    email: string;
                    username: string;
                    name: string;
                    avatar: string | null;
                    role: import("@prisma/generated").$Enums.Role;
                    provider: string;
                    universityId: string | null;
                    publicKey: string | null;
                    createdAt: Date;
                    updatedAt: Date;
                };
                followers: {
                    id: string;
                    email: string;
                    username: string;
                    name: string;
                    avatar: string | null;
                    role: import("@prisma/generated").$Enums.Role;
                    provider: string;
                    universityId: string | null;
                    publicKey: string | null;
                    createdAt: Date;
                    updatedAt: Date;
                }[];
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                communityName: string;
                description: string;
                public: boolean;
                topics: string[];
                createdById: string;
            })[];
        };
    }>;
    createCommunity(userId: string, data: CreateCommunityDto): Promise<{
        success: boolean;
        message: string;
        data: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            communityName: string;
            description: string;
            public: boolean;
            topics: string[];
            createdById: string;
        };
    }>;
    fetchAllCommunities(): Promise<{
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
    followCommunity(userId: string, communityId: string): Promise<{
        success: boolean;
        message: string;
        data: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            communityName: string;
            description: string;
            public: boolean;
            topics: string[];
            createdById: string;
        }[];
    }>;
    unfollowCommunity(userId: string, communityId: string): Promise<{
        success: boolean;
        message: string;
        data: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            communityName: string;
            description: string;
            public: boolean;
            topics: string[];
            createdById: string;
        }[];
    }>;
    updateCommunity(data: UpdateCommunityDto, id: string): Promise<{
        success: boolean;
        message: string;
        data: import("@prisma/generated").Prisma.Prisma__CommunityClient<{
            id: string;
            createdAt: Date;
            updatedAt: Date;
            communityName: string;
            description: string;
            public: boolean;
            topics: string[];
            createdById: string;
        }, never, import("@prisma/generated/runtime/library").DefaultArgs, import("@prisma/generated").Prisma.PrismaClientOptions>;
    }>;
    deleteCommunity(id: string): Promise<{
        success: boolean;
        message: string;
        data: import("@prisma/generated").Prisma.Prisma__CommunityClient<{
            id: string;
            createdAt: Date;
            updatedAt: Date;
            communityName: string;
            description: string;
            public: boolean;
            topics: string[];
            createdById: string;
        }, never, import("@prisma/generated/runtime/library").DefaultArgs, import("@prisma/generated").Prisma.PrismaClientOptions>;
    }>;
}

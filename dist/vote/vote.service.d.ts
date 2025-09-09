import { PrismaService } from '../prisma/prisma.service';
export declare class VoteService {
    private prisma;
    constructor(prisma: PrismaService);
    votePost(userId: string, data: {
        value: number;
        postId: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        value: number;
        postId: string;
    }>;
    voteComment(userId: string, data: {
        value: number;
        commentId: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        value: number;
        commentId: string;
    }>;
}

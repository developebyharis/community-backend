import { VoteService } from './vote.service';
export declare class VoteController {
    private readonly voteService;
    constructor(voteService: VoteService);
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

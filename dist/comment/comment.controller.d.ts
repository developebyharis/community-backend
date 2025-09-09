import { CommentService } from './comment.service';
import { CreateCommentDto, UpdateCommentDto } from './dto/comment.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    createComment(userId: string, data: CreateCommentDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        body: string;
        postId: string;
        commentById: string;
        parentId: string | null;
    }>;
    getCommentsByPost(postId: string): Promise<({
        commentBy: {
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
        replies: ({
            commentBy: {
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
            replies: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                body: string;
                postId: string;
                commentById: string;
                parentId: string | null;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            body: string;
            postId: string;
            commentById: string;
            parentId: string | null;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        body: string;
        postId: string;
        commentById: string;
        parentId: string | null;
    })[]>;
    getCommentById(id: string): Promise<{
        commentBy: {
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
        replies: ({
            commentBy: {
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
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            body: string;
            postId: string;
            commentById: string;
            parentId: string | null;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        body: string;
        postId: string;
        commentById: string;
        parentId: string | null;
    }>;
    updateComment(userId: string, id: string, data: UpdateCommentDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        body: string;
        postId: string;
        commentById: string;
        parentId: string | null;
    }>;
    deleteComment(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        body: string;
        postId: string;
        commentById: string;
        parentId: string | null;
    }>;
}

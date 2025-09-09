import { SavedService } from './saved.service';
export declare class SavedController {
    private savedService;
    constructor(savedService: SavedService);
    savedPost(userId: string, postId: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        postId: string;
    } | undefined>;
    savedComment(userId: string, commentId: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        commentId: string;
    } | undefined>;
    getMySavedPost(userId: string): Promise<({
        posts: {
            community: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                communityName: string;
                description: string;
                public: boolean;
                topics: string[];
                createdById: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            communityId: string;
            title: string;
            body: import("@prisma/generated/runtime/library").JsonValue;
            authorId: string;
        };
    } & {
        id: string;
        createdAt: Date;
        userId: string;
        postId: string;
    })[]>;
    getMySavedComment(userId: string): Promise<({
        comments: {
            post: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                communityId: string;
                title: string;
                body: import("@prisma/generated/runtime/library").JsonValue;
                authorId: string;
            };
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
        };
    } & {
        id: string;
        createdAt: Date;
        userId: string;
        commentId: string;
    })[]>;
}

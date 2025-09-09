import { PostService } from './post.service';
import { CreatePostDTO } from './dto/create-post.dto';
import { UpdatePostDTO } from './dto/update-post.dto';
export declare class PostController {
    private postService;
    constructor(postService: PostService);
    createPost(userId: string, data: CreatePostDTO): Promise<{
        success: boolean;
        message: string;
    }>;
    fetchMyPost(userId: string): Promise<{
        success: boolean;
        message: string;
        data: ({
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
            author: {
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
        } & {
            id: string;
            title: string;
            body: import("@prisma/generated/runtime/library").JsonValue;
            createdAt: Date;
            updatedAt: Date;
            communityId: string;
            authorId: string;
        })[];
    }>;
    updatePost(id: string, data: UpdatePostDTO): Promise<{
        success: boolean;
        message: string;
    }>;
    deletePost(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
    fetchAllPost(): Promise<{
        success: boolean;
        message: string;
        data: {
            id: string;
            title: string;
            content: import("@prisma/generated/runtime/library").JsonValue;
            createdAt: Date;
            updatedAt: Date;
            author: {
                id: string;
                username: string;
                avatar: string | null;
            };
            community: {
                id: string;
                communityName: string;
                description: string;
            };
            votes: {
                id: string;
                value: number;
                userId: string;
            }[];
            comments: {
                id: string;
                body: string;
                createdAt: Date;
                parentId: string | null;
                author: {
                    id: string;
                    username: string;
                    avatar: string | null;
                };
                votes: {
                    id: string;
                    value: number;
                    userId: string;
                }[];
                replies: {
                    id: string;
                    body: string;
                    createdAt: Date;
                    parentId: string | null;
                    author: {
                        id: string;
                        username: string;
                        avatar: string | null;
                    };
                }[];
            }[];
        }[];
    }>;
}

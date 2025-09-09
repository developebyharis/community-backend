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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PostService = class PostService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createPost(userId, data) {
        await this.prisma.post.create({
            data: {
                communityId: data.communityId,
                title: data.title,
                body: data.content,
                authorId: userId,
            },
        });
        return {
            success: true,
            message: 'Post created successfully',
        };
    }
    async getMyPost(userId) {
        const posts = await this.prisma.post.findMany({
            where: {
                authorId: userId,
            },
            include: {
                author: true,
                community: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
        return {
            success: true,
            message: 'Posts fetched successfully',
            data: posts,
        };
    }
    async getAllPost() {
        const posts = await this.prisma.post.findMany({
            include: {
                community: true,
                author: true,
                comments: {
                    include: {
                        commentBy: true,
                        replies: {
                            include: {
                                commentBy: true,
                            },
                        },
                        votes: true,
                    },
                },
                votes: true,
            },
            orderBy: {
                updatedAt: 'desc',
            },
        });
        if (!posts || posts.length === 0) {
            throw new common_1.BadRequestException({
                success: false,
                message: 'No post Found',
                errorCode: 'POST_NOT_FOUND',
            });
        }
        const cleanData = posts.map((p) => ({
            id: p.id,
            title: p.title,
            content: p.body,
            createdAt: p.createdAt,
            updatedAt: p.updatedAt,
            author: {
                id: p.author.id,
                username: p.author.username,
                avatar: p.author.avatar,
            },
            community: {
                id: p.community.id,
                communityName: p.community.communityName,
                description: p.community.description,
            },
            votes: p.votes.map((v) => ({
                id: v.id,
                value: v.value,
                userId: v.userId,
            })),
            comments: p.comments.map((c) => ({
                id: c.id,
                body: c.body,
                createdAt: c.createdAt,
                parentId: c.parentId,
                author: {
                    id: c.commentBy.id,
                    username: c.commentBy.username,
                    avatar: c.commentBy.avatar,
                },
                votes: c.votes.map((v) => ({
                    id: v.id,
                    value: v.value,
                    userId: v.userId,
                })),
                replies: c.replies.map((r) => ({
                    id: r.id,
                    body: r.body,
                    createdAt: r.createdAt,
                    parentId: r.parentId,
                    author: {
                        id: r.commentBy.id,
                        username: r.commentBy.username,
                        avatar: r.commentBy.avatar,
                    },
                })),
            })),
        }));
        return {
            success: true,
            message: 'Posts fetched successfully',
            data: cleanData,
        };
    }
    async updatePost(id, data) {
        await this.prisma.post.update({
            where: { id },
            data: {
                title: data.title,
                body: data.content,
                updatedAt: new Date(),
            },
        });
        return {
            success: true,
            message: 'post updated successfully',
        };
    }
    async deletePost(id) {
        await this.prisma.post.delete({
            where: { id },
        });
        return {
            success: true,
            message: 'post deletd successfully',
        };
    }
};
exports.PostService = PostService;
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PostService);
//# sourceMappingURL=post.service.js.map
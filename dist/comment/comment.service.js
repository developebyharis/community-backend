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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CommentService = class CommentService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createComment(userId, data) {
        return await this.prisma.comment.create({
            data: {
                body: data.body,
                commentById: userId,
                postId: data.postId,
                parentId: data.parentId ?? null,
            },
        });
    }
    async getCommentsByPost(postId) {
        return await this.prisma.comment.findMany({
            where: { postId, parentId: null },
            include: {
                replies: {
                    include: {
                        replies: true,
                        commentBy: true,
                    },
                },
                commentBy: true,
            },
            orderBy: {
                updatedAt: 'desc'
            }
        });
    }
    async getCommentById(id) {
        const comment = await this.prisma.comment.findUnique({
            where: { id },
            include: {
                replies: {
                    include: { commentBy: true },
                },
                commentBy: true,
            },
        });
        if (!comment) {
            throw new common_1.NotFoundException({
                success: false,
                message: 'Comment not found',
                errorCode: 'COMMENT_NOT_FOUND',
            });
        }
        return comment;
    }
    async updateComment(userId, data) {
        const existing = await this.prisma.comment.findUnique({
            where: { id: data.id },
        });
        if (!existing) {
            throw new common_1.NotFoundException({
                success: false,
                message: 'Comment not found',
                errorCode: 'COMMENT_NOT_FOUND',
            });
        }
        if (existing.commentById !== userId) {
            throw new common_1.ForbiddenException({
                success: false,
                message: 'You cannot update someone else’s comment',
                errorCode: 'FORBIDDEN',
            });
        }
        return await this.prisma.comment.update({
            where: { id: data.id },
            data: {
                body: data.body,
            },
        });
    }
    async deleteComment(userId, id) {
        const existing = await this.prisma.comment.findUnique({ where: { id } });
        if (!existing) {
            throw new common_1.NotFoundException({
                success: false,
                message: 'Comment not found',
                errorCode: 'COMMENT_NOT_FOUND',
            });
        }
        if (existing.commentById !== userId) {
            throw new common_1.ForbiddenException({
                success: false,
                message: 'You cannot delete someone else’s comment',
                errorCode: 'FORBIDDEN',
            });
        }
        return await this.prisma.comment.delete({
            where: { id },
        });
    }
};
exports.CommentService = CommentService;
exports.CommentService = CommentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CommentService);
//# sourceMappingURL=comment.service.js.map
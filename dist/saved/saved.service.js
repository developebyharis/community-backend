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
exports.SavedService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SavedService = class SavedService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async savedPost(userId, postId) {
        const exisitingSaved = await this.prisma.savedPost.findUnique({
            where: {
                userId_postId: { userId, postId },
            },
        });
        if (exisitingSaved) {
            if (exisitingSaved.postId === postId) {
                return this.prisma.savedPost.delete({
                    where: { id: exisitingSaved.id },
                });
            }
            else {
                return this.prisma.postVote.update({
                    where: { id: exisitingSaved.id },
                    data: { postId },
                });
            }
        }
        await this.prisma.savedPost.create({
            data: {
                userId,
                postId,
            },
        });
    }
    async savedComment(userId, commentId) {
        const exisitingSaved = await this.prisma.savedComments.findUnique({
            where: {
                userId_commentId: { userId, commentId },
            },
        });
        if (exisitingSaved) {
            if (exisitingSaved.commentId === commentId) {
                return this.prisma.savedComments.delete({
                    where: { id: exisitingSaved.id },
                });
            }
            else {
                return this.prisma.savedComments.update({
                    where: { id: exisitingSaved.id },
                    data: { commentId },
                });
            }
        }
        await this.prisma.savedComments.create({
            data: {
                userId,
                commentId,
            },
        });
    }
    async getMySavedPost(userId) {
        return this.prisma.savedPost.findMany({
            where: { userId },
            include: {
                posts: {
                    include: {
                        community: true,
                    },
                },
            },
        });
    }
    async getMySavedComment(userId) {
        return this.prisma.savedComments.findMany({
            where: { userId },
            include: {
                comments: {
                    include: {
                        post: true,
                        commentBy: true,
                    },
                },
            },
        });
    }
};
exports.SavedService = SavedService;
exports.SavedService = SavedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SavedService);
//# sourceMappingURL=saved.service.js.map
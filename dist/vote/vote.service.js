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
exports.VoteService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let VoteService = class VoteService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async votePost(userId, data) {
        const postId = data.postId;
        const value = data.value;
        const existingVote = await this.prisma.postVote.findUnique({
            where: {
                userId_postId: { userId, postId },
            },
        });
        if (existingVote) {
            if (existingVote.value === value) {
                return this.prisma.postVote.delete({
                    where: { id: existingVote.id },
                });
            }
            else {
                return this.prisma.postVote.update({
                    where: { id: existingVote.id },
                    data: { value },
                });
            }
        }
        return this.prisma.postVote.create({
            data: {
                userId,
                postId,
                value,
            },
        });
    }
    async voteComment(userId, data) {
        const commentId = data.commentId;
        const value = data.value;
        const existingVote = await this.prisma.commentVote.findUnique({
            where: {
                userId_commentId: { userId, commentId },
            },
        });
        if (existingVote) {
            if (existingVote.value === value) {
                return this.prisma.commentVote.delete({
                    where: { id: existingVote.id },
                });
            }
            else {
                return this.prisma.commentVote.update({
                    where: { id: existingVote.id },
                    data: { value },
                });
            }
        }
        return this.prisma.commentVote.create({
            data: {
                userId,
                commentId,
                value,
            },
        });
    }
};
exports.VoteService = VoteService;
exports.VoteService = VoteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VoteService);
//# sourceMappingURL=vote.service.js.map
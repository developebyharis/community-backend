import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class VoteService {
  constructor(private prisma: PrismaService) {}

  async votePost(userId: string, data: { value: number; postId: string }) {
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
      } else {
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

  async voteComment(
    userId: string,
    data: { value: number; commentId: string },
  ) {
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
      } else {
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
}

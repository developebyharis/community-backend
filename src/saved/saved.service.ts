import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SavedService {
  constructor(private prisma: PrismaService) {}

  async savedPost(userId: string, postId: string) {
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
      } else {
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

  async savedComment(userId: string, commentId: string) {
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
      } else {
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

  async getMySavedPost(userId: string) {
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

  async getMySavedComment(userId: string) {
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
}

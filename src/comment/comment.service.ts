import { BadRequestException, Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCommentDto, UpdateCommentDto } from './dto/comment.dto';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  async createComment(userId: string, data: CreateCommentDto) {
    return await this.prisma.comment.create({
      data: {
        body: data.body,
        commentById: userId,
        postId: data.postId,
        parentId: data.parentId ?? null, 
      },
    });
  }


  async getCommentsByPost(postId: string) {
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


  async getCommentById(id: string) {
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
      throw new NotFoundException({
        success: false,
        message: 'Comment not found',
        errorCode: 'COMMENT_NOT_FOUND',
      });
    }

    return comment;
  }

 
  async updateComment(userId: string, data: UpdateCommentDto) {
    const existing = await this.prisma.comment.findUnique({
      where: { id: data.id },
    });

    if (!existing) {
      throw new NotFoundException({
        success: false,
        message: 'Comment not found',
        errorCode: 'COMMENT_NOT_FOUND',
      });
    }

    if (existing.commentById !== userId) {
      throw new ForbiddenException({
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

 
  async deleteComment(userId: string, id: string) {
    const existing = await this.prisma.comment.findUnique({ where: { id } });

    if (!existing) {
      throw new NotFoundException({
        success: false,
        message: 'Comment not found',
        errorCode: 'COMMENT_NOT_FOUND',
      });
    }

    if (existing.commentById !== userId) {
      throw new ForbiddenException({
        success: false,
        message: 'You cannot delete someone else’s comment',
        errorCode: 'FORBIDDEN',
      });
    }

    return await this.prisma.comment.delete({
      where: { id },
    });
  }
}

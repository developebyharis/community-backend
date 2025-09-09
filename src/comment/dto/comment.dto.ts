import { IsString, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCommentDto {
  @IsString()
  postId: string;
  @IsString()
  body: string;
  @IsString()
  @IsOptional()
  parentId: string;
}

export class UpdateCommentDto extends PartialType(CreateCommentDto) {
  @IsString()
  id: string;
}

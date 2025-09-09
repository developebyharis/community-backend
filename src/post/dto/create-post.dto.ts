import { IsString, IsNotEmpty, IsObject } from 'class-validator';

export class CreatePostDTO {
  @IsString()
  @IsNotEmpty()
  communityId: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsObject()
  @IsNotEmpty()
  content: Record<string, any>;
}

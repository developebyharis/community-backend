import { IsString, IsBoolean, IsArray } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCommunityDto {
  @IsString()
  communityName: string;

  @IsString()
  description: string;

  @IsBoolean()
  public: boolean = true;

  @IsArray()
  @IsString({ each: true })
  topics: string[];
}

export class UpdateCommunityDto extends PartialType(CreateCommunityDto) {}

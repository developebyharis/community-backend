import { IsString, IsBoolean, IsOptional, IsArray } from 'class-validator';

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

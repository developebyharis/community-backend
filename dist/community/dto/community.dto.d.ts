export declare class CreateCommunityDto {
    communityName: string;
    description: string;
    public: boolean;
    topics: string[];
}
declare const UpdateCommunityDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCommunityDto>>;
export declare class UpdateCommunityDto extends UpdateCommunityDto_base {
}
export {};

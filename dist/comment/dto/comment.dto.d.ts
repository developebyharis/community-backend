export declare class CreateCommentDto {
    postId: string;
    body: string;
    parentId: string;
}
declare const UpdateCommentDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCommentDto>>;
export declare class UpdateCommentDto extends UpdateCommentDto_base {
    id: string;
}
export {};

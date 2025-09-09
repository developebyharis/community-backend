import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): Promise<{
        id: string;
        email: string;
        username: string;
        name: string;
        avatar: string | null;
        role: import("@prisma/generated").$Enums.Role;
        provider: string;
        universityId: string | null;
        publicKey: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    findByUsername(username: string): Promise<{
        id: string;
        email: string;
        username: string;
        name: string;
        avatar: string | null;
        role: import("@prisma/generated").$Enums.Role;
        provider: string;
        universityId: string | null;
        publicKey: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    findUserById(id: string): Promise<{
        id: string;
        email: string;
        username: string;
        name: string;
        avatar: string | null;
        role: import("@prisma/generated").$Enums.Role;
        provider: string;
        universityId: string | null;
        publicKey: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    create(user: any): Promise<{
        id: string;
        email: string;
        username: string;
        name: string;
        avatar: string | null;
        role: import("@prisma/generated").$Enums.Role;
        provider: string;
        universityId: string | null;
        publicKey: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    checkUser(id: string): Promise<{
        id: string;
        email: string;
        username: string;
        name: string;
        avatar: string | null;
        role: import("@prisma/generated").$Enums.Role;
        provider: string;
        universityId: string | null;
        publicKey: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}

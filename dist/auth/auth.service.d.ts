import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly jwtService;
    private readonly userService;
    constructor(jwtService: JwtService, userService: UsersService);
    validateGoogleUser(profile: any): Promise<{
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
    generateJwt(user: any): Promise<{
        accessToken: string;
    }>;
    findUserFromDb(id: string): Promise<{
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
}

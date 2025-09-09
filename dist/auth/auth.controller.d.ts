import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    googleAuth(): Promise<void>;
    googleCallback(req: any): Promise<{
        accessToken: string;
    }>;
    getProfile(req: any): Promise<{
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
    getJwt(body: any): Promise<{
        accessToken: string;
    }>;
}

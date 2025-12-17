import { PrismaService } from '../prisma.service';
export declare class AuthService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    register(email: string, password: string): Promise<{
        id: number;
        email: string;
    }>;
    login(email: string, password: string): Promise<{
        user: {
            id: number;
            email: string;
        };
        accessToken: string;
    }>;
    logout(): {
        success: boolean;
    };
}

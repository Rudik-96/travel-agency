import { AuthService } from './auth.service';
declare class RegisterDto {
    email: string;
    password: string;
}
declare class LoginDto {
    email: string;
    password: string;
}
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): {
        id: number;
        email: string;
    };
    login(dto: LoginDto): {
        user: {
            id: number;
            email: string;
        };
        accessToken: string;
    };
    logout(): {
        success: boolean;
    };
}
export {};

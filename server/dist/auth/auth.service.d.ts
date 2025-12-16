export declare class AuthService {
    private users;
    private nextId;
    register(email: string, password: string): {
        id: number;
        email: string;
    };
    login(email: string, password: string): {
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

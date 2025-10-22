interface AuthDataRequest {
    email: string;
    password: string;
}
interface AuthResponse {
    token: string;
    user: {
        id: string;
        name: string;
        email: string;
        role: string;
    };
}
declare class AuthUserService {
    static handle({ email, password }: AuthDataRequest): Promise<AuthResponse>;
}
export default AuthUserService;
//# sourceMappingURL=UserAuthService.d.ts.map
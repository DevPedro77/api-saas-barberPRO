interface CreateUserData {
    email: string;
    password: string;
    name: string;
    roles: string;
}
declare class UserService {
    createUser({ email, password, name, roles }: CreateUserData): Promise<{
        id: string;
        email: string;
        name: string;
        role: string;
        createdAt: Date;
    }>;
}
declare const _default: UserService;
export default _default;
//# sourceMappingURL=UserService.d.ts.map
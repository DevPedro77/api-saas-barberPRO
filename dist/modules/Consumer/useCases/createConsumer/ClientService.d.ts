interface CreateClientData {
    name: string;
    phone: string;
}
declare class ClientService {
    handle({ name, phone }: CreateClientData): Promise<{
        email: string | null;
        name: string;
        id: string;
        createdAt: Date;
        phone: string;
    } | undefined>;
}
declare const _default: ClientService;
export default _default;
//# sourceMappingURL=ClientService.d.ts.map
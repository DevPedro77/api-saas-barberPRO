declare class ListClientService {
    handle(): Promise<{
        email: string | null;
        name: string;
        id: string;
        createdAt: Date;
        phone: string;
    }[]>;
}
declare const _default: ListClientService;
export default _default;
//# sourceMappingURL=ListClientService.d.ts.map
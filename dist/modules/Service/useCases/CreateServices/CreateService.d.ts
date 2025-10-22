interface CreateServiceData {
    name: string;
    price: number;
    durationMin: number;
}
declare class CreateService {
    handle({ name, price, durationMin }: CreateServiceData): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        price: number;
        durationMin: number;
    }>;
}
declare const _default: CreateService;
export default _default;
//# sourceMappingURL=CreateService.d.ts.map
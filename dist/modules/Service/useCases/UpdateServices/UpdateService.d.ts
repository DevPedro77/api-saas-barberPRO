interface UpdateService {
    id: string;
    name?: string;
    price?: number;
    durationMin?: number;
}
declare class UpdateServices {
    handle({ id, name, price, durationMin }: UpdateService): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        price: number;
        durationMin: number;
    }>;
}
declare const _default: UpdateServices;
export default _default;
//# sourceMappingURL=UpdateService.d.ts.map
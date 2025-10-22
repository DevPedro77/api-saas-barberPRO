interface DeleteService {
    id: string;
}
declare class DeleteServices {
    handle({ id }: DeleteService): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        price: number;
        durationMin: number;
    }>;
}
declare const _default: DeleteServices;
export default _default;
//# sourceMappingURL=DeleteService.d.ts.map
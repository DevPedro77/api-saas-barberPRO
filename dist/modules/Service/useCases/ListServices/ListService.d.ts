declare class ListService {
    execute(): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        price: number;
        durationMin: number;
    }[]>;
}
declare const _default: ListService;
export default _default;
//# sourceMappingURL=ListService.d.ts.map
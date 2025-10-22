declare class ListService {
    handle(): Promise<{
        revenue: {
            month: number;
            today: number;
            year: number;
        };
        appointments: {
            totalToday: number;
            upcoming: {
                id: string;
                createdAt: Date;
                serviceId: string;
                dateTime: Date;
                customerId: string;
                status: string;
                barberId: string | null;
            }[];
        };
        mostRequestedServices: (import("@prisma/client").Prisma.PickEnumerable<import("@prisma/client").Prisma.AppointmentGroupByOutputType, "serviceId"[]> & {
            _count: {
                serviceId: number;
            };
        })[];
    }>;
}
export default ListService;
//# sourceMappingURL=ListService.d.ts.map
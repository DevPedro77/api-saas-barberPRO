declare class ListServiceAppointments {
    static handle(): Promise<{
        id: string;
        dateTime: Date;
        status: string;
        serviceName: string;
        servicePrice: number;
        customerName: string;
        customerEmail: string | null;
    }[]>;
}
export default ListServiceAppointments;
//# sourceMappingURL=ListServiceAppoiments.d.ts.map
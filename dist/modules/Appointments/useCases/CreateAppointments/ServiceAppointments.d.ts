interface CreateAppointmentRequest {
    serviceId: string;
    dateTime: Date;
    customerId: string;
    barberId?: string;
    status?: "pending" | "confirmed" | "completed" | "cancelled";
}
declare class CreateAppointmentService {
    static handle({ serviceId, dateTime, customerId, status, }: CreateAppointmentRequest): Promise<{
        customer: {
            email: string | null;
            name: string;
            id: string;
            createdAt: Date;
            phone: string;
        };
        service: {
            name: string;
            id: string;
            createdAt: Date;
            price: number;
            durationMin: number;
        };
    } & {
        id: string;
        createdAt: Date;
        serviceId: string;
        dateTime: Date;
        customerId: string;
        status: string;
        barberId: string | null;
    }>;
}
export default CreateAppointmentService;
//# sourceMappingURL=ServiceAppointments.d.ts.map
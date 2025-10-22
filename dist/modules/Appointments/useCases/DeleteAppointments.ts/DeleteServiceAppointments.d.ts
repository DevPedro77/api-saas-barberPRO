interface ServiceAppointmentsRequest {
    appointment_Id: string;
}
declare class DeleteServiceAppointments {
    static handle({ appointment_Id }: ServiceAppointmentsRequest): Promise<void>;
}
export default DeleteServiceAppointments;
//# sourceMappingURL=DeleteServiceAppointments.d.ts.map
export interface IBookingTable {
    startTime: Date;
    numberOfGuests : number; 
    customer: {
        name: string;
        phoneNumber: string;
        email: string;
    };
}

import axios, { AxiosResponse } from "axios";
import { APIEndpoints, ControllerUrls } from "../utils/consts";
import { IBookingTable } from "../models/IBookingTable";

export default class BookingTableService {
    static async postBookingTable(bookingTableModel: IBookingTable): Promise<AxiosResponse> {
        return await axios.post<any>(`/api${ControllerUrls.BOOKING_TABLE}/${APIEndpoints.BOOKING_TABLE.POST}`,
            bookingTableModel // Передаем объект bookingTableModel в теле запроса
        );
    }
}

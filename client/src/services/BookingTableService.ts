import axios, { AxiosResponse } from "axios";
import { ControllerUrls } from "../utils/consts";

export default class BookingTableService {
    static async postBookingTable(): Promise<AxiosResponse> {
        return axios.post<any>(`/api${ControllerUrls.BOOKING_TABLE}/`, {});
    }
}

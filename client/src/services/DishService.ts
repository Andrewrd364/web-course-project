import axios, { AxiosResponse } from 'axios';
import { ControllerUrls } from "../utils/consts";

export default class AuthService {
    static async get(): Promise<AxiosResponse<any>> {
        return axios.post<any>(`/api${ControllerUrls.DISHES}/`, {})
    }
    
    static async put(): Promise<void> {
        return axios.post(`/api${ControllerUrls.DISHES}/`)
    }

}

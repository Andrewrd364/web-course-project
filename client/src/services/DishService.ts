import axios, { AxiosResponse } from "axios";
import MockAdapter from "axios-mock-adapter";
import { ControllerUrls } from "../utils/consts";
import { dishes } from "../utils/mockData";
import { IDish } from "../models/IDish";

export default class DishService {
    static async getAll(): Promise<AxiosResponse<IDish[]>> {
        return axios.get('http://localhost:5000/api/dishes');
    }

    static async put(): Promise<void> {
        // Ваш реальный метод put()
        return axios.post(`/api${ControllerUrls.DISHES}/`);
    }
}

import axios, { AxiosResponse } from "axios";
import MockAdapter from "axios-mock-adapter";
import { ControllerUrls } from "../utils/consts";
import { dishes } from "../utils/mockData";
import { IDish } from "../models/IDish";

export default class DishService {
    static async getAll(): Promise<AxiosResponse<IDish[]>> {
        // Создаем экземпляр axios и MockAdapter
        const axiosInstance = axios.create();
        const mock = new MockAdapter(axiosInstance);

        // Мокируем запрос POST на `/api${ControllerUrls.DISHES}`
        mock.onGet(`/api${ControllerUrls.DISHES}`).reply(200, dishes);

        // Выполняем запрос
        return axiosInstance.get(`/api${ControllerUrls.DISHES}`, {});

        // return axios.get<any>(`/api${ControllerUrls.DISHES}`, {});
    }

    static async put(): Promise<void> {
        // Ваш реальный метод put()
        return axios.post(`/api${ControllerUrls.DISHES}/`);
    }
}

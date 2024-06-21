import axios, {
    AxiosRequestHeaders,
    AxiosResponse,
} from "axios";
import { ControllerUrls } from "../utils/consts";
import { ICategory } from "../models/ICategory";
import MockAdapter from "axios-mock-adapter";
import { categories } from "../utils/mockData";

export default class CategoryService {
    static async getAll(): Promise<AxiosResponse<ICategory[]>> {
        // Создаем экземпляр axios и MockAdapter
        const axiosInstance = axios.create();
        const mock = new MockAdapter(axiosInstance);
        // Мокируем запрос POST на `/api${ControllerUrls.DISHES}`
        mock.onGet(`/api${ControllerUrls.CATEGORIES}`).reply(200, categories);
        // Выполняем запрос
        return axiosInstance.get(`/api${ControllerUrls.CATEGORIES}`, {});

        return axios.get<any>(`/api${ControllerUrls.CATEGORIES}/`, {});
    }
}

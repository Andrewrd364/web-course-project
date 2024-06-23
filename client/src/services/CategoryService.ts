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
        return axios.get('http://localhost:5000/api/categories');
    }
}

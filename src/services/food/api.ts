import { AxiosResponse } from "axios";
import api from "@config/api";


export const searchFoodApi = async (text: string): Promise<AxiosResponse> => {
    return api.get('/v1/food', {
        params: {
            "name": text
        }
    });
};
import axios, { AxiosResponse } from 'axios';
import { UserState } from '@redux/types/userTypes';


export const calculatTDEEApi = async (state: UserState): Promise<AxiosResponse> => {
    console.log( {
        "gender": state.gender,
        "birthdate": state.birthDate,
        "height": state.height,
        "weight": state.weight,
        "target": state.target,
        "activityLevel": state.activity,
        "targetDate": state.targetDate
    });
    return axios({
        "method": "post",
        "url": "https://www.kinefit.fr/api/v1/calculator",
        "data": {
            "gender": state.gender,
            "birthdate": state.birthDate,
            "height": state.height,
            "weight": state.weight,
            "target": state.target,
            "activityLevel": state.activity,
            "targetDate": state.targetDate
        }
    });
};
import axios, { AxiosResponse } from 'axios';
import { UserActivityLevel, UserActivityLevelKey, UserState } from '@redux/types/userTypes';


export const calculatTDEEApi = async (state: UserState): Promise<AxiosResponse> => {
    
    return await axios({
        method: 'post',
        url: `http://10.0.2.2:3000/api/v1/calculator`,
        data: {
            "gender": state.gender,
            "birthdate": state.birthDate,
            "height": state.height,
            "weight": state.weight,
            "target": state.target,
            "activityLevel": UserActivityLevel[state.activity as UserActivityLevelKey],
            "targetDate": state.targetDate,
        }
    });
};
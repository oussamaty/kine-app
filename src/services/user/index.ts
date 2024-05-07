import axios, { AxiosResponse } from 'axios';
import { UserActivityLevel, UserActivityLevelKey, UserState } from '@redux/types/userTypes';
import { useAppSelector } from '@hooks/index';
import { convertLength, convertWeight } from '@utils/unitConverters';

export const calculatTDEEApi = async (state: UserState): Promise<AxiosResponse> => {

    const weightUnit = useAppSelector(state => state.units.weightUnit);
    const heightUnit = useAppSelector(state => state.units.heightUnit);

    let heightInCm: number;
    if (heightUnit === 'cm') {
        heightInCm = state.height as number;
    } else {
        heightInCm = convertLength(state.height as number, 'ft,in');
    }


    let weightInKg: number;
    let targetWeightInKg: number;
    if (weightUnit === 'kg') {
        weightInKg = state.weight as number;
        targetWeightInKg = state.target as number;
    } else {
        weightInKg = convertWeight(state.weight as number, 'lb');
        targetWeightInKg = convertWeight(state.target as number, 'lb');
    }

    return await axios({
        method: 'post',
        url: `http://10.0.2.2:3000/api/v1/calculator`,
        data: {
            "gender": state.gender,
            "birthdate": state.birthDate,
            "height": heightInCm,
            "weight": weightInKg,
            "target": targetWeightInKg,
            "activityLevel": UserActivityLevel[state.activity as UserActivityLevelKey],
            "targetDate": state.targetDate,
        }
    });
};
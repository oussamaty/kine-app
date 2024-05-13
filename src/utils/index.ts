export const isNumeric = (text: string): boolean => text.match(/^-?\d+(\.\d+)?$/) !== null;

const weekDays = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat'
};

export const weekDay = (day: number): string => {
    if (weekDays.hasOwnProperty(day)) {
        return weekDays[day as keyof typeof weekDays];
    } else {
        throw new Error("Invalid day number: " + day);
    }
};

export const formatDay = (day: Date): string => day.toISOString().split('T')[0];

export const multiplyMaps = (firstMap: Record<any, number>, secondMap: Record<any, number>): Record<any, Record<any, number>> => {
    const result = {};
    for (let key in firstMap) {
        result[key] = {};
        for (let k in secondMap) {
            result[key][k] = secondMap[k] * firstMap[key];
        }
    }
    return result;
};

export const elementMultMaps = (firstMap: Record<any, number>, secondMap: Record<any, number>): Record<any, number> => {
    const result = {};
    for (let key in firstMap) {
        if (secondMap[key]) {
            result[key] = firstMap[key] * secondMap[key];
        }
    }
    return result;
};


export const checkTokenExp = (token: string, date: string): boolean => {
    const currentDate = new Date();
    const expDate = new Date(date);
    return currentDate.toISOString() < expDate.toISOString();
};
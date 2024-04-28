export const isNumeric = (text: string): boolean => text.match(/^[0-9]+$/) !== null;

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
}
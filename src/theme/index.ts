import Font, { Roboto } from '@theme/font';

export interface Theme {
    white: string;
    black: string;
    success: string;
    error: string;
    warning: string;
    shadow: string;
    font: Font;

    text: string;
    background: string;
    primary: string;
    secondary: string;
    tertiary: string;
}

const themeCommon = {
    white: "#FFFFFF",
    black: "#000000",
    success: "#22C55E",
    error: "#EF4444",
    warning: "#EAB308",
    shadow: "#DEE2E6",
    font: Roboto;
};

export const lightTheme: Theme = {
    ...themeCommon,
    text: "#000000",
    background: "#FFFFFF",
    primary: "#15F5BA",
    secondary: "#211951",
    tertiary: "#F7A072",
};

export const darkTheme: Theme = {
    ...themeCommon,
    text: "#FFFFFF",
    background: "#000000",
    primary: "#15F5BA",
    secondary: "#211951",
    tertiary: "#F7A072",
};
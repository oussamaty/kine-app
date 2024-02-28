export default interface Font {
    regular: string,
    medium: string,
    bold: string,
    light: string,
    black?: string,
    thin?: string,
}

export const Roboto: Font = {
    regular: "Robot-Regular",
    medium: "Robot-Medium",
    bold: "Robot-Bold",
    light: "Robot-Light",
    black: "Robot-Black",
    thin: "Robot-Thin",
}
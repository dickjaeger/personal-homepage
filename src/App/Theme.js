import { ThemeProvider } from "styled-components";

const lightTheme = {
    colors: {
        background: "#FBFBFE",
        background2: "#FFFFFF",
        textPrimary: "#252525",
        textSecondary: "#6E7E91",
        mainBlue: "#0366D6",
        mainBlueBorder: "#0366D633",
        themeSwitchBackground: "#E5E5E5",
        themeSwitchIcon: "#FFFFFF",
        iron: "#d1d5da4d",
        white: "#FFFFFF",
    },
    breakpoints: {
        mobileMax: 650,
        tabletMax: 900,
    },
};

const darkTheme = {
    ...lightTheme,
    colors: {
        background: "#252525",
        background2: "rgba(54, 54, 54, 0.72)",
        textPrimary: "#FFFFFF",
        textSecondary: "#FFFFFF",
        mainBlue: "#2188FF",
        mainBlueBorder: "rgba(3, 102, 214, 0.5)",
        themeSwitchBackground: "rgba(54, 54, 54, 0.72)",
        themeSwitchIcon: "#252525",
        iron: "#d1d5da4d",
        white: "#FFFFFF",
    },
};

const Theme = ({ children, dark }) => (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>{children}</ThemeProvider>
);

export default Theme;

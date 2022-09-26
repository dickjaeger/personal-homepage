import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        background: "#FBFBFE",
        background2: "#FFFFFF",
        textPrimary: "#252525",
        textSecondary: "#6E7E91",
        mainBlue: "#0366D6",
        mainBlueBorder: "#0366D633",
        iron: "#d1d5da4d",
        white: "#FFFFFF",
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

import { createSlice } from "@reduxjs/toolkit";
import { getDarkModeFromLocalStorage } from "./darkModeStorage";

const themeTogglerSlice = createSlice({
    name: "themeToggler",
    initialState: {
        isDarkMode: getDarkModeFromLocalStorage(),
    },
    reducers: {
        toggleDarkMode: ({ isDarkMode }) => ({
            isDarkMode: !isDarkMode
        }),
    }
});

export const {
    toggleDarkMode,
} = themeTogglerSlice.actions;

const selectThemeTogglerState = state => state.themeToggler;

export const selectIsDarkMode = state => selectThemeTogglerState(state).isDarkMode;

export default themeTogglerSlice.reducer;
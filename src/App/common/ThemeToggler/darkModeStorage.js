export const setDarkModeInLocalStorage = darkMode => 
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

export const getDarkModeFromLocalStorage = () => 
    JSON.parse(localStorage.getItem("darkMode")) || false;
import { useEffect, useState } from "react";

const useDarkMode = () => {
    const storedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    const [darkMode, setDarkMode] = useState(storedDarkMode || false);

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);

    return [darkMode, setDarkMode];
};

export default useDarkMode;


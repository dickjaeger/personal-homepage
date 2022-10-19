import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDarkModeInLocalStorage } from "./darkModeStorage";
import { selectIsDarkMode, toggleDarkMode } from "./slice";
import { Container, TogglerText } from "./styled";
import Switch from "./Switch";

const ThemeToggler = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector(selectIsDarkMode);

    useEffect(() => {
        setDarkModeInLocalStorage(darkMode);
    }, [darkMode]);

    return (
        <Container onClick={() => dispatch(toggleDarkMode())}>
            <TogglerText>dark mode {darkMode ? "on" : "off"}</TogglerText>
            <Switch $on={darkMode} />
        </Container>
    );
};

export default ThemeToggler;
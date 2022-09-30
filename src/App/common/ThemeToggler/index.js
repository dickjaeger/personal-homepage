import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkMode, toggleDarkMode } from "./slice";
import { Container, TogglerText } from "./styled";
import Switch from "./Switch";

const ThemeToggler = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector(selectIsDarkMode);

    return (
        <Container onClick={() => dispatch(toggleDarkMode())}>
            <TogglerText>dark mode {darkMode ? "on" : "off"}</TogglerText>
            <Switch $on={darkMode} />
        </Container>
    );
};

export default ThemeToggler;
import { Container, TogglerText } from "./styled";
import Switch from "./Switch";

const ThemeToggler = ({ darkMode, setDarkMode }) => (
    <Container onClick={() => setDarkMode(!darkMode)}>
        <TogglerText>dark mode {darkMode ? "on" : "off"}</TogglerText>
        <Switch on={darkMode}/>
    </Container>
);

export default ThemeToggler;
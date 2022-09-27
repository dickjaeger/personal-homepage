import { Container, TogglerText } from "./styled";
import { ReactComponent as ToggleOffLight } from './ToggleOff-light.svg';
import { ReactComponent as ToggleOffDark } from './ToggleOff-dark.svg';

const ThemeToggler = ({ darkMode, setDarkMode }) => (
    <Container onClick={() => setDarkMode(!darkMode)}>
        <TogglerText>dark mode {darkMode ? "on" : "off"}</TogglerText>
        {darkMode ? <ToggleOffDark /> : <ToggleOffLight />}
    </Container>
);

export default ThemeToggler;
import { Container, TogglerContainer, TogglerSwitch, TogglerText } from "./styled";
import { ReactComponent as ToggleOffLight } from './ToggleOff-light.svg';

const ThemeToggler = () => (
    <Container>
        <TogglerText>dark mode off</TogglerText>
        <ToggleOffLight/>
    </Container>
);

export default ThemeToggler;
import { ReactComponent as DangerIcon } from "./Danger.svg";
import { Container, Header, HeaderParagraph, Info } from "./styled";
import { Button } from "../../styled";

const Error = () => (
    <Container>
        <Header>
        <DangerIcon />
            <HeaderParagraph>Ooops! Something went wrong...</HeaderParagraph>
        </Header>
        <Info>
            Sorry, failed to load Github projects.<br />
            You can check them directly on Github.
        </Info>
        <Button href="https://github.com/dickjaeger">Go to Github</Button>
    </Container>
);

export default Error;
import { Container, Photo, Title, LeadParagraph, TextContainer } from "./styled";
import { Button } from "../styled";
import { Caption } from "../styled";
import myPhoto from './my-photo.jpg';
import { ReactComponent as MessageIcon } from './Message.svg';

const Header = () => (
    <Container>
        <Photo src={myPhoto} alt="" />
        <TextContainer>
            <div>
                <Caption>THIS IS</Caption>
                <Title>
                    Wojciech Leksza
                </Title>
            </div>
            <LeadParagraph>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Duis lectus enim,
                iaculis non ipsum rhoncus, pretium dapibus libero.
                Donec vitae.
            </LeadParagraph>
            <Button href="mailto: wojtek.leksza@gmail.com">
                <MessageIcon />Hire Me
            </Button>
        </TextContainer>
    </Container>
);

export default Header;
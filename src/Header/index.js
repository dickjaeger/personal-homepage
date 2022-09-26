import { Container, Photo, Caption, Title, LeadParagraph, TextContainer, HireMeButton } from "./styled";
import myPhoto from './my-photo.jpg';
import { ReactComponent as MessageIcon } from './Message.svg';

const Header = () => (
    <Container>
        <Photo src={myPhoto} alt="" />
        <TextContainer>
            <Caption>THIS IS</Caption>
            <Title>Wojciech Leksza</Title>
            <LeadParagraph>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Duis lectus enim,
                iaculis non ipsum rhoncus, pretium dapibus libero.
                Donec vitae.
            </LeadParagraph>
            <HireMeButton href="#">
                <MessageIcon />Hire Me
            </HireMeButton>
        </TextContainer>
    </Container>
);

export default Header;
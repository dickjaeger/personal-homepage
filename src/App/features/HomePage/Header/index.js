import { Container, Photo, Title, LeadParagraph, TextContainer } from "./styled";
import { Button } from "../../../styled";
import { Caption } from "../../../styled";
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
                I'm a Junior Frontend Developer specializing in React, 
                currently looking for new job opportunities. 💻📈
            </LeadParagraph>
            <Button href="mailto: wojtek.leksza@gmail.com">
                <MessageIcon />Hire Me
            </Button>
        </TextContainer>
    </Container>
);

export default Header;
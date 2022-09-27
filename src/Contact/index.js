import { Caption } from "../styled";
import Links from "./Links";
import { Container, Mail, Paragraph } from "./styled";



const Contact = () => (
    <Container>
        <Caption>LET'S TALK!</Caption>
        <Mail>wojtek.leksza@gmail.com</Mail>
        <Paragraph>
            I'm open to new challenges. I learn new skills very quickly. 
            If you need in your team someone young, ambitious and strongly 
            committed to their work, feel free to contact me!
            </Paragraph>
        <Links />
    </Container>
);

export default Contact;
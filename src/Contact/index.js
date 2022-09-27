import { Caption } from "../styled";
import Links from "./Links";
import { Container, Mail, Paragraph } from "./styled";



const Contact = () => (
    <Container>
        <Caption>LET'S TALK!</Caption>
        <Mail>wojtek.leksza@gmail.com</Mail>
        <Paragraph>I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me</Paragraph>
        <Links />
    </Container>
);

export default Contact;
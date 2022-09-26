import { Container, Description, Link, Paragraph, Title } from "./styled";

const ProjectTile = ({ title, description, demo, code }) => (
    <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Paragraph>Demo: <Link as="a" href="#">{demo}</Link></Paragraph>
        <Paragraph>Code: <Link as="a" href="#">{code}</Link></Paragraph>
    </Container>
);

export default ProjectTile;
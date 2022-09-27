import { Container, Description, Link, Paragraph, Title } from "./styled";

const ProjectTile = ({ name, description, demo, code }) => (
    <Container>
        <Title>{name.replaceAll("-", " ").replace(/(^\w|\s\w)/g, m => m.toUpperCase())}</Title>
        <Description>{description}</Description>
        <Paragraph>Demo:
            <Link as="a" href={demo}>https://{name}/demo</Link>
        </Paragraph>
        <Paragraph>Code:
            <Link as="a" href={code}>https://{name}/code</Link>
        </Paragraph>
    </Container>
);

export default ProjectTile;
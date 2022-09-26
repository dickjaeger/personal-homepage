import { Container, ProjectsWrapper, SubTitle, Title } from "./styled";
import { ReactComponent as GithubIcon } from './github.svg';
import ProjectTile from "./ProjectTile";

const Portfolio = () => (
    <Container>
        <GithubIcon />
        <Title>Portfolio</Title>
        <SubTitle>My recent projects</SubTitle>
        <ProjectsWrapper>
            <ProjectTile
                title="Movies Browser"
                description="Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search."
                demo="https://link.demo.com"
                code="https://link.code.com"
            />
            <ProjectTile
                title="Movies Browser"
                description="Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search."
                demo="https://link.demo.com"
                code="https://link.code.com"
            />
            <ProjectTile
                title="Movies Browser"
                description="Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search."
                demo="https://link.demo.com"
                code="https://link.code.com"
            />
            <ProjectTile
                title="Movies Browser"
                description="Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search."
                demo="https://link.demo.com"
                code="https://link.code.com"
            />
        </ProjectsWrapper>
    </Container>
);

export default Portfolio;
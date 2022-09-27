import { Container, ProjectsWrapper, SubTitle, Title } from "./styled";
import { ReactComponent as GithubIcon } from './github.svg';
import ProjectTile from "./ProjectTile";
import Error from "./Error"
import Loading from "./Loading"
import useGithubProjects from "./useGithubProjects";

const Portfolio = () => {
    const githubProjects = useGithubProjects();
    console.log(githubProjects);

    return (
        <Container>
            <GithubIcon />
            <Title>Portfolio</Title>
            <SubTitle>My recent projects</SubTitle>
            {githubProjects.error || githubProjects.loading
                ? githubProjects.error ? <Error /> : <Loading />
                : <ProjectsWrapper>
                    {githubProjects.projects.map(project => (

                        <ProjectTile
                            name={project.name}
                            description={project.description}
                            demo={`https://dickjaeger.github.io/${project.name}`}
                            code={`https://github.com/dickjaeger/${project.name}`}
                        />
                    ))}
                </ProjectsWrapper>
            }
        </Container>
    );
};

export default Portfolio;
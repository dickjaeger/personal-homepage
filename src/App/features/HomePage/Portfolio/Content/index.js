import { Container } from "./styled";
import Loading from "./Loading";
import Error from "./Error";
import ProjectTile from "./ProjectTile";

const Content = ({ status, projects }) => {
    switch (status) {
        case "loading":
            return <Loading />;

        case "error":
            return <Error />;

        case "success":
            return (
                <Container>
                    {projects.map(project => (
                        <ProjectTile
                            key={project.id}
                            name={project.name}
                            description={project.description}
                            demo={`https://dickjaeger.github.io/${project.name}`}
                            code={`https://github.com/dickjaeger/${project.name}`}
                        />
                    ))}
                </Container>
            );
    };
};

export default Content;
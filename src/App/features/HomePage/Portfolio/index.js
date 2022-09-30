import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGithubProjects, selectProjects, selectStatus } from "../slice";
import githubUsername from "./githubUsername";
import Content from "./Content";
import { Container, SubTitle, Title } from "./styled";
import { ReactComponent as GithubIcon } from './github.svg';

const Portfolio = () => {
    const dispatch = useDispatch();

    const projects = useSelector(selectProjects);
    const projectsStatus = useSelector(selectStatus);
    
    useEffect(() => {
        dispatch(fetchGithubProjects(githubUsername));
    }, [dispatch]);

    return (
        <Container>
            <GithubIcon />
            <Title>Portfolio</Title>
            <SubTitle>My recent projects</SubTitle>
            <Content 
                projects = {projects}
                status ={projectsStatus}
            />
        </Container>
    );
};

export default Portfolio;
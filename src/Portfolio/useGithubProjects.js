import { useState, useEffect } from 'react';

const useGithubProjects = () => {
    const [GithubProjects, setGithubProjects] = useState({
        loading: true,
        error: false,
    });

    useEffect((GithubProjects) => {
        fetch("https://api.github.com/users/dickjaeger/repos")
            .then(response => response.json())
            .then(result => {
                if (result.error) {
                    throw new Error();
                };

                setTimeout(() => setGithubProjects({
                    projects: result,
                    loading: false,
                    error: true,
                }), 1000);
            })
            .catch(() => {
                setTimeout(() => setGithubProjects({
                    loading: false,
                    error: true,
                }), 1000);
            });
    }, []);

    return GithubProjects;
};

export default useGithubProjects;
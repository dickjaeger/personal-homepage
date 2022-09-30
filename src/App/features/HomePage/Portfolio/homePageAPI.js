export const getGithubProjects = username =>
    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => {
            if (!response.ok) {
                throw new Error();
            };

            return response.json();
        });
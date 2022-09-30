import { createSlice } from "@reduxjs/toolkit";

const homePageSlice = createSlice({
    name: "homePage",
    initialState: {
        status: "loading",
        projects: null,
    },
    reducers: {
        fetchGithubProjects: () => ({
            status: "loading",
            projects: null,
        }),
        fetchGithubProjectsError: () => ({
            status: "error",
            projects: null,
        }),
        fetchGithubProjectsSuccess: (_, { payload: githubProjects }) => ({
            status: "success",
            projects: githubProjects,
        }),
    },
});

export const {
    fetchGithubProjects,
    fetchGithubProjectsError,
    fetchGithubProjectsSuccess,
} = homePageSlice.actions;

const selectHomePageState = state => state.homePage;
export const selectStatus = state => selectHomePageState(state).status;
export const selectProjects = state => selectHomePageState(state).projects;

export default homePageSlice.reducer;
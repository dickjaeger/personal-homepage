import { takeLatest, call, put, delay } from 'redux-saga/effects';
import githubUsername from './Portfolio/githubUsername';
import { getGithubProjects } from './Portfolio/homePageAPI';
import { fetchGithubProjects, fetchGithubProjectsError, fetchGithubProjectsSuccess } from './slice';

function* fetchGithubProjectsHandler() {
    try {
        yield delay(2000);
        const githubProjects = yield call(getGithubProjects, githubUsername);
        yield put(fetchGithubProjectsSuccess(githubProjects));
    } catch (error) {
        yield put(fetchGithubProjectsError());
    };
};

export function* homePageSaga() {
    yield takeLatest(fetchGithubProjects.type, fetchGithubProjectsHandler);
};
import { all } from 'redux-saga/effects';
import { homePageSaga } from './App/features/HomePage/saga';

export default function* rootSaga() {
    yield all([
        homePageSaga(),
    ]);
};
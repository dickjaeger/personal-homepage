import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import homePageReducer from './App/features/HomePage/slice';
import themeTogglerReducer from './App/common/ThemeToggler/slice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        homePage: homePageReducer,
        themeToggler: themeTogglerReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
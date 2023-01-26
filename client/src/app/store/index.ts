import {configureStore} from '@reduxjs/toolkit';
import {createWrapper} from 'next-redux-wrapper';
import logger from 'redux-logger'
import {rootReducer} from "@/app/store/reducers";

export const store = configureStore<any>({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(logger)
});

export const makeStore = () => store;

export const wrapper = createWrapper(makeStore, {debug: true});

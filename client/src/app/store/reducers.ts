import {AnyAction, combineReducers} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";
import {counterModel} from '@/entities/counter'

const combinedReducer = combineReducers({
    counter: counterModel.store.reducer
});

export const rootReducer = (state: ReturnType<typeof combinedReducer>, action: AnyAction) => {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload,
        };
    } else {
        return combinedReducer(state, action);
    }
};
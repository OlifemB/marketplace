import {Action, ThunkAction} from "@reduxjs/toolkit";
import {makeStore, store} from "@/app/store/index";

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
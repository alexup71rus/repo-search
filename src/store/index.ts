import { combineReducers, configureStore } from "@reduxjs/toolkit";
import RepoReducer from "./reducers/RepoSlice";

const rootReducer = combineReducers({
    RepoReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRepo } from "../../models/IRepo";

interface RepoState {
    repos: IRepo[],
    searchQuery: string,
    isLoading: boolean,
    error: string,
}

const initialState: RepoState = {
    repos: [],
    searchQuery: '',
    isLoading: false,
    error: ''
}

export const repoSlice = createSlice({
    name: 'repo',
    initialState,
    reducers: {
        repoFetching(state) {
            state.isLoading = true;
        },
        repoFetchSuccess(state, action: PayloadAction<IRepo[]>) {
            state.isLoading = false;
            state.error = '';
            state.repos = action.payload;
        },
        repoFetchError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        repoClear(state) {
            state.isLoading = false;
            state.error = '';
            state.repos = [];
        },
    }
});

export default repoSlice.reducer;
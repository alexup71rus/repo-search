import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { IRepo } from "../../models/IRepo";
import { RepoState } from "../../models/IRepoState";
import { fetchRepos } from "./ActionRepos";

const initialState: RepoState = {
    repos: [],
    searchQuery: '',
    isLoading: false,
    error: '',
    page: 1,
    limit: 10,
}

export const repoSlice = createSlice({
    name: 'repo',
    initialState,
    reducers: {
        // repoFetching(state: RepoState) {
        //     state.isLoading = true;
        // },
        // repoFetchSuccess(state: RepoState, action: PayloadAction<IRepo[]>) {
        //     state.isLoading = false;
        //     state.error = '';
        //     state.repos = action.payload;
        // },
        // repoFetchError(state: RepoState, action: PayloadAction<string>) {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // },
        // repoClear(state: RepoState) {
        //     state.isLoading = false;
        //     state.error = '';
        //     state.repos = [];
        // },
    },
    // {
    //     [fetchRepos.pending.type]: (state: RepoState, action: PayloadAction<IRepo[]>) => {
    //         state.isLoading = true;
    //     },
    //     [fetchRepos.fulfilled.type]: (state: RepoState, action: PayloadAction<IRepo[]>) => {
    //         state.isLoading = false;
    //         state.error = '';
    //         state.repos = action.payload;
    //     },
    //     [fetchRepos.rejected.type]: (state: RepoState, action: PayloadAction<string>) => {
    //         state.isLoading = false;
    //         state.error = action.payload;
    //     }
    // }
    extraReducers: builder => {
        builder
            .addCase(fetchRepos.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchRepos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = '';
                state.repos = action.payload;
            })
            .addCase(fetchRepos.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export default repoSlice.reducer;
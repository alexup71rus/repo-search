import { createAsyncThunk } from "@reduxjs/toolkit";
import { IRepo } from "../../models/IRepo";

// оставил для наглядного примера похожей реализации
// export const fetchRepos = (searchQuery: string) => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(repoSlice.actions.repoFetching());
//         const response = await fetch('https://api.github.com/search/repositories?q=' + searchQuery);
//         const data = await response.json();
//         const items = data.items.map((item: any): IRepo => ({
//             title: item.full_name,
//             description: item.description,
//             ownerUrl: item.owner.html_url,
//             avatarUrl: item.owner.avatar_url,
//             cardRepoUrl: item.html_url,
//         }))
//         dispatch(repoSlice.actions.repoFetchSuccess(items));
//     } catch (error: any) {
//         dispatch(repoSlice.actions.repoFetchError(error.message));
//     }
// }

// export const clearRepos = () => async (dispatch: AppDispatch) => {
//     dispatch(repoSlice.actions.repoClear());
// }

export const fetchRepos = createAsyncThunk(
    'search/repositories',
    async (query: string, thunkAPI) => {
        try {
            const response = await fetch('https://api.github.com/search/repositories?q' + query);
            const data = await response.json();

            if (data.message) {
                throw Error(data.message);
            }
            
            
            return data.items.map((item: any): IRepo => ({
                title: item.full_name,
                description: item.description,
                ownerUrl: item.owner.html_url,
                avatarUrl: item.owner.avatar_url,
                cardRepoUrl: item.html_url,
            }));
        } catch (error) {
            return thunkAPI.rejectWithValue((error as Error).message);
        }
    }
)

export const clearRepos = createAsyncThunk(
    'search/repositories',
    async (_, thunkAPI) => {
        return []
    }
)
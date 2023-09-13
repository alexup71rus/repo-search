import { AppDispatch } from "..";
import { repoSlice } from "./RepoSlice";


export const fetchRepos = (searchQuery: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(repoSlice.actions.repoFetching());
        const response = await fetch('https://api.github.com/search/repositories?q=' + searchQuery);
        const data = await response.json();
        const items = data.items.map((item: any) => ({
            title: item.full_name,
            description: item.description,
            ownerUrl: item.owner.html_url,
            avatarUrl: item.owner.avatar_url,
            cardRepoUrl: item.html_url,
        }))
        dispatch(repoSlice.actions.repoFetchSuccess(items));
    } catch (error: any) {
        dispatch(repoSlice.actions.repoFetchError(error.message));
    }
}

export const clearRepos = () => async (dispatch: AppDispatch) => {
    console.log('clear')
    dispatch(repoSlice.actions.repoClear());
}
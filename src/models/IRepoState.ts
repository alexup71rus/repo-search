import { IRepo } from "./IRepo";

export interface RepoState {
    repos: IRepo[];
    searchQuery: string;
    isLoading: boolean;
    error: string;
    page: number;
    limit: number;
}
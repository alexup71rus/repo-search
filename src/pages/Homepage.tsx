import { ReactElement, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { clearRepos, fetchRepos } from "../store/reducers/ActionRepos";
import { IRepo } from "../models/IRepo";
import { RootState } from "../store";
import Search from "../components/Search";
import CardItem from "../components/CardItem";
import useDebounce from "../hooks/useDebounce";

export default function Homepage() {
    const dispatch = useAppDispatch();
    const {repos, error} = useAppSelector((state: RootState) => state.RepoReducer);
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('q') || '');
    const debouncedValue = useDebounce(query, 1500);

    const debouncedCallback = useCallback(() => {
        if (query) {
            dispatch(fetchRepos(query));
        } else {
            dispatch(clearRepos());
        }

        return query;
    }, [query, dispatch])

    useEffect(() => {
        if (debouncedValue === query) {
            debouncedCallback();
        }
    }, [debouncedValue, query, debouncedCallback]);

    return (
        <>
        <Search 
            value={query}
            placeholder='Введите запрос'
            onChange={(ev) => {
                setQuery(ev.target.value);
                setSearchParams('q=' + ev.target.value)
            }} />
        {
            repos?.length
            ? 
            <div className="cards">{
                repos.map((result: IRepo): ReactElement => <CardItem key={result.title + result.cardRepoUrl} {...result}/>)
            }</div>
            : <div className="error">{(error && 'Ошибка:' + error) || 'Упс. Что-то пошло не так.'}</div>
        }
        </>
    )
}
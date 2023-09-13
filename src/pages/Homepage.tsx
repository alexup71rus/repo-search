import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Search from "../components/Search";
import CardItem from "../components/CardItem";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { clearRepos, fetchRepos } from "../store/reducers/ActionRepos";
import { IRepo } from "../models/IRepo";
import { RootState } from "../store/store";
import useDebounce from "../hooks/useDebounce";

export default function Homepage() {
    const dispatch = useAppDispatch();
    const {repos} = useAppSelector((state: RootState) => state.RepoReducer);
    const urlParams = useParams();
    const navigate = useNavigate();
    const [query, setQuery] = useState(urlParams['*'] ?? '');
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
                navigate('/' + ev.target.value);
            }} />
        {
            repos.length
            ? 
            <div className="cards">{
                repos.map((result: IRepo): React.ReactElement => <CardItem key={result.title + result.cardRepoUrl} {...result}/>)
            }</div>
            : null
        }
        </>
    )
}
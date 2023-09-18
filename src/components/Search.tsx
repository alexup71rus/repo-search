import { ChangeEvent, FC, MutableRefObject, memo, useEffect, useRef } from "react";
import SearchInput from './UI/input/Input';

interface SearchProps {
    onChange: (ev: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    name?: string;
    value?: string;
    placeholder?: string;
};

const Search: FC<SearchProps> = memo((props) => {
    const refInput: MutableRefObject<any> = useRef<HTMLDivElement>(null);

    useEffect(() => {
        refInput.current.focus();
    }, []);
        
    return <SearchInput
        {...props}
        ref={refInput} />;
});

export default Search;
import { ChangeEvent, MutableRefObject, useEffect, useRef } from "react";
import SearchInput from './UI/input/Input';

type Props = {
    value: string;
    placeholder: string;
    onChange: (ev: ChangeEvent<HTMLInputElement>) => void;
};

export default function Search(props: Props) {
    const refInput: MutableRefObject<any> = useRef(null);

    useEffect(() => {
        refInput.current.focus();
    }, []);
        
    return <SearchInput
        {...props}
        ref={refInput} />;
}
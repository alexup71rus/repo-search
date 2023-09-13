import { SetStateAction, useState } from "react";

export default function useMark(value: string, mark: string) {
    const [state, setState] = useState('');
    const isMarked = (value === state) ? mark : '';

    const handleChange = function(value: SetStateAction<string>) {
        if (state !== value) {
            setState(value);
        }

        return isMarked;
    };

    return [isMarked, handleChange];
}
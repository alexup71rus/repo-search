import { SetStateAction, useState } from "react";

export default function useMark<T>(value: T, mark: string): any[] {
    const [state, setState] = useState('');
    const isMarked: string = (value === state) ? mark : '';

    const handleChange = function(value: SetStateAction<string>) {
        if (state !== value) {
            setState(value);
        }

        return isMarked;
    };

    return [isMarked, handleChange];
}
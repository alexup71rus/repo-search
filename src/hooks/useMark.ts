import { SetStateAction, useState } from "react";

export default function useMark<T extends string>(value: T, mark: T): any[] {
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
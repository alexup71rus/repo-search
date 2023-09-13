import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, delay?: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timeout = setTimeout(() => setDebouncedValue(value), delay || 1000);

        return () => {
            clearTimeout(timeout);
        }
    }, [value, delay]);

    return debouncedValue;
}
import { useState, useEffect } from 'react';

const useLocalStorage = <T extends unknown>(
    key: string,
    initialValue: T,
    parse?: (arg0: string) => T,
    stringify?: (arg0: T) => string
) => {
    const state = useState<T>(() => {
        const item = localStorage.getItem(key);

        if (item === null) return initialValue;

        return parse ? parse(item) : (JSON.parse(item) as T);
    });

    useEffect(() => {
        localStorage.setItem(key, stringify ? stringify(state[0]) : JSON.stringify(state[0]));
    }, [key, state, stringify]);

    return state;
};
export default useLocalStorage;

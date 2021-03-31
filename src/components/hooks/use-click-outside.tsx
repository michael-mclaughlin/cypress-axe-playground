import { useCallback, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useClickOutside = (callback: any, ref: any) => {
    const wrappedCallback = useCallback(
        (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        },
        [callback, ref]
    );

    useEffect(() => {
        // Bind the event listener
        document.addEventListener('mousedown', wrappedCallback);

        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', wrappedCallback);
        };
    });
};

export default useClickOutside;

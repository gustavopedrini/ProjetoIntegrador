import { useEffect, useState } from "react";

/**
 * Debounces a value by delaying its update.
 *
 * @param {*} value The value to debounce.
 * @param {number} delay The delay in milliseconds.
 * @return {*} The debounced value.
 */
const UseDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // Timer responsible for delaying the update of the debounced value.
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Clean up function, which will be called when the component unmounts.
        // Resets the timer.
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};


export default UseDebounce;
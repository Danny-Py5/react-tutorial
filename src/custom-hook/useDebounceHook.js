import { useEffect, useState } from "react";

export function useDebounceHook(value, timeOut = 500) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, timeOut);

    return () => {
      clearTimeout(timer);
    };
  }, [timeOut, value]);

  return debounceValue;
}

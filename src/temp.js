import { useEffect, useState } from "react";

export default function useDebounceSearch(value, time) {
  const [search, setSearch] = useState(value);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSearch(value);
    }, time);

    return () => {
      clearTimeout(timeOut);
    };
  }, [value, time, search]);

  return search;
}

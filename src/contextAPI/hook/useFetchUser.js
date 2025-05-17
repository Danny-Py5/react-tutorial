import { useEffect, useState } from "react";

export default function useFetchUser(id) {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`,
          { signal: controller.signal }
        );
        const data = await response.json();
        setLoading(false);
        setUserData(data);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    };
    fetchUser();

    return () => {
      setLoading(false);
      controller.abort();
    };
  }, [id]);
  return [userData, loading, error];
}

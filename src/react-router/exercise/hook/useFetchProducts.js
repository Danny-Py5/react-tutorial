import { useEffect, useState } from "react";

export default function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    let isAborted = false;
    const loadProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products", {
          signal: controller.signal,
        });
        const data = await res.json();
        if (!isAborted) {
          setProducts(data);
          setLoading(false);
        }
      } catch (error) {
        if (!isAborted) {
          console.log("An error occurred", error);
          setError(error);
          setLoading(false);
        }
      }
    };

    loadProducts();

    return () => {
      isAborted = true; // Mark as aborted
      controller.abort();
    };
  }, []);
  return [products, loading, error];
}

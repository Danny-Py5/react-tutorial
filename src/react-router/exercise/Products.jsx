import { useEffect } from "react";
import useFetchProducts from "./hook/useFetchProducts.js";

export default function Products() {
  const [products, loading, error] = useFetchProducts();

  useEffect(() => {
    if (products && !error && !loading) {
      console.log("final product:", products);
    }
  }, [products, loading, error]);
  return (
    <div>
      <h1>Product page </h1>
      <p>{loading ? "loading..." : "done loading"}</p>
    </div>
  );
}

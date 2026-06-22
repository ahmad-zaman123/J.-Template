import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";

// Fetch products with a params object; re-fetches when params change.
export default function useProducts(params = {}) {
  const key = JSON.stringify(params);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetchProducts(params)
      .then((list) => {
        if (!cancelled) setProducts(list);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message || "Failed to load products");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return { products, loading, error };
}

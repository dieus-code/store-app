import { useState, useEffect } from "react";

export default function GetData(id?: string | number) {
  const [products, setProducts] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    const url = id
      ? `https://fakestoreapi.com/products/${id}`
      : "https://fakestoreapi.com/products";

    const fetchData = async () => {
      setError("");
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed with status ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (err: any) {
        console.error("Error fetching products:", err);
        setError(err.message || "Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { products, loading, error };
}
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { useCart } from "./cartContext"; // Adjust path if needed

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

interface RelatedProductsProps {
  category: string;
  currentProductId: number;
}

export default function RelatedProducts({ category, currentProductId }: RelatedProductsProps) {
  const [related, setRelated] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    if (!category) return;

    setLoading(true);
    // Fetch products in the same category
    fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`)
      .then((res) => res.json())
      .then((data: Product[]) => {
        // Exclude current product and take up to 4 items
        const filtered = data.filter((item) => item.id !== Number(currentProductId)).slice(0, 4);
        setRelated(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch related products:", err);
        setLoading(false);
      });
  }, [category, currentProductId]);

  if (loading) {
    return (
      <div className="mt-12 text-center text-gray-500 py-6">
        Loading recommendations...
      </div>
    );
  }

  if (related.length === 0) return null;

  return (
    <section className="mt-16 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        You Might Also Like
      </h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {related.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition flex flex-col justify-between"
          >
            <Link to={`/details/${product.id}`} className="block group">
              <div className="h-40 w-full flex items-center justify-center p-2 mb-3 bg-gray-50 rounded-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors">
                {product.title}
              </h3>
            </Link>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-base font-bold text-green-600">
                ${product.price.toFixed(2)}
              </span>
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition"
              >
                + Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
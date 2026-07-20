import React from "react";
import { useParams, Link } from "react-router";
import GetData from "./get-data";
import { useCart } from "./cartContext"; // Remove or adjust if you aren't using cartContext

export default function ProductDetails() {
  // 1. Grab the dynamic ":id" from the route URL
  const { id } = useParams<{ id: string }>();

  // 2. Fetch the single product by passing the id into your hook
  const { products: product, loading, error } = GetData(id);

  // 3. Optional: Access cart context
  const { addToCart } = useCart();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-lg font-medium text-gray-600 animate-pulse">
          Loading product details...
        </p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="text-center p-12">
        <h2 className="text-2xl font-bold text-red-500 mb-2">Product Not Found</h2>
        <p className="text-gray-600 mb-6">
          We couldn't load the product you were looking for.
        </p>
        <Link
          to="/"
          className="inline-block bg-gray-800 text-white px-5 py-2.5 rounded-lg hover:bg-black transition"
        >
          ← Back to All Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Back Link */}
      <Link
        to="/home"
        className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-black mb-6 transition"
      >
        ← Back to store
      </Link>

      {/* Main Details Card */}
      <div className="bg-white border border-gray-800 rounded-xl p-6 md:p-8 shadow-md grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-black">
        {/* Product Image */}
        <div className="flex justify-center items-center border border-gray-200 rounded-lg p-6 h-80 bg-white">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
              {product.category}
            </span>
            <h1 className="text-2xl font-bold mt-1 mb-3">{product.title}</h1>
            <p className="text-2xl font-extrabold text-green-600 mb-4">
              ${product.price?.toFixed(2)}
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              {product.description}
            </p>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart && addToCart(product)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
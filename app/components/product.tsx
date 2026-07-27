import React, { useState } from "react";
import { Link } from "react-router";
import GetData from "./get-data";
import { useCart } from "./cartContext"; 
import SearchBar from "./searchbar";

export default function GetProducts() {
  const { products, loading, error } = GetData();
  const { addToCart } = useCart();

  // 1. Local state for the search query
  const [searchItem, setSearchItem] = useState("");

  if (loading) {
    return (
      <div className="text-center p-8 text-lg font-medium text-gray-600">
        Loading products...
      </div>
    );
  }

  if (error || !products || !Array.isArray(products)) {
    return (
      <div className="text-center p-8 text-red-500 font-medium">
        Failed to load products. Please try again later.
      </div>
    );
  }

  // 2. Filter products based on search term
  const filteredProducts = products.filter((product: any) =>
    product.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* 3. Render SearchBar with state props */}
      <SearchBar searchItem={searchItem} onSearchChange={setSearchItem} />

      {/* 4. Fallback if search returns empty */}
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-700 font-medium my-8">
          No products found matching "{searchItem}"
        </p>
      ) : (
        /* 5. Render filtered products array */
        <div className="flex flex-wrap justify-center gap-4">
          {filteredProducts.map((product: any) => (
            <div
              key={product.id}
              className="flex flex-col justify-between bg-white border border-gray-800 w-64 p-4 rounded-lg shadow-md hover:shadow-lg transition text-black"
            >
              <Link to={`/details/${product.id}`} className="flex flex-col items-center">
                <div className="bg-gray-500 flex justify-center items-center border border-gray-200 rounded-lg w-full h-48 p-2 mb-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="font-semibold text-sm line-clamp-2 mb-1 w-full">
                  {product.title}
                </h3>
                <p className="font-bold text-black w-full mb-3">
                  ${product.price?.toFixed(2)}
                </p>
              </Link>

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  addToCart && addToCart(product);
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
import React from "react";
import { Link } from "react-router";
import GetData from "./get-data";
import { useCart } from "./cartContext";

export default function GetProducts() {

  const { products, loading, error } = GetData();
  const { addToCart } = useCart();


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


  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {products.map((product: any) => (
        <div
          key={product.id}
          className="flex flex-col justify-between bg-white border border-gray-800 w-64 p-4 rounded-lg shadow-md hover:shadow-lg transition text-black"
        >
          <Link to={`/details/${product.id}`} className="flex flex-col items-center">
            <div className="flex justify-center items-center border border-gray-200 rounded-lg w-full h-48 p-2 mb-3">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <h3 className="font-semibold text-sm line-clamp-2 mb-1 w-full">
              {product.title}
            </h3>
            <p className="font-bold text-green-600 w-full mb-3">
              ${product.price?.toFixed(2)}
            </p>
          </Link>

         
        </div>
      ))}
    </div>
  );
}
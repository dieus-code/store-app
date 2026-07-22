import React from "react";
import { Link } from "react-router"; // or "react-router-dom"
import { useCart } from "./cartContext"; // Adjust relative path if needed

export default function NavBar() {
  // 1. Consume the cart state from Context
  const { totalItems, totalPrice } = useCart();

  return (
    <nav className="bg-transparent border-b border-blue-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <ul className="flex items-center space-x-8 text-sm font-medium text-blue-100">
          <li>
            <Link 
              to="/home" 
              className="relative py-1 transition-colors duration-200 hover:text-blue-600"
            >
             store
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="relative py-1 transition-colors duration-200 hover:text-blue-600"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="relative py-1 transition-colors duration-200 hover:text-blue-600"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* 2. Cart Summary Badge */}
        <div className="flex items-center gap-4">
          <Link 
            to="/cart" 
            className="bg-gray-800 border border-gray-700 px-3 py-1.5 rounded-lg text-sm font-semibold text-white hover:bg-gray-700 transition"
          >
            🛒 Cart: <span className="text-green-400">{totalItems}</span> items (${totalPrice.toFixed(2)})
          </Link>
        </div>
      </div>
    </nav>
  );
}
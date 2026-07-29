import React from "react";
import { Link } from "react-router"; // or "react-router-dom"
import { useCart } from "./cartContext"; // Adjust relative path if needed

export default function NavBar() {

  const { totalItems } = useCart();

  return (
    <nav className="bg-amber-900 border-b border-blue-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <ul className="flex items-center space-x-8 text-sm font-medium text-black">
          <li>
            <Link 
              to="/store" 
              className="  relative py-1 transition-colors duration-200 hover:text-blue-600"
            >
             Store
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

        <div className="flex items-center gap-4">
          <Link 
            to="/cart" 
            className="bg-amber-200 border border-gray-700 px-3 py-1.5 rounded-lg text-sm font-semibold text-black hover:bg-gray-700 transition"
          >
            🛒 Cart: <span className="text-grey-400">{totalItems}</span> 
          </Link>
        </div>
      </div>
    </nav>
  );
}
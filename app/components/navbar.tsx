import React from "react";

export default function NavBar() {
  return (
    <nav className="bg-transparent border-b border-blue-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
       
        <ul className="flex items-center space-x-8 text-sm font-medium text-blue-100">
          <li>
            <a 
              href="/home" 
              className="relative py-1 transition-colors duration-200 hover:text-blue-600 "
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="/about" 
              className="relative py-1 transition-colors duration-200 hover:text-blue-600 "
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="/contact" 
              className="relative py-1 transition-colors duration-200 hover:text-blue-600 "
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Optional Action Button (e.g., Shop Now or Sign In)
        <div>
          <button className="bg-blue-600 hover:bg-amber-700 text-white text-xs font-semibold tracking-wide px-4 py-2 rounded-full shadow-sm transition-all duration-200 hover:shadow transform hover:-translate-y-0.5">
            Shop Collection
          </button>
        </div> */}
      </div>
    </nav>
  );
}
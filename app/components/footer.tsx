import React from "react";
import { Link } from "react-router"; // Use "react-router-dom" if using classic React Router

export default function Footer() {
  return (
    <footer className="bg-amber-950 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-wide">
              Binny Buy
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your one-stop online destination for high-quality products at unbeatable prices. Shop smart, live better.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/home" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-blue-400 transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-blue-400 transition-colors">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-400 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#shipping" className="hover:text-blue-400 transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

        

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="border-t border-amber-950 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Binny Buy. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#terms" className="hover:text-gray-400 transition">Terms of Service</a>
            <a href="#privacy" className="hover:text-gray-400 transition">Privacy</a>
            <a href="#cookies" className="hover:text-gray-400 transition">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
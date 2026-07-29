import React from "react";
import { Link } from "react-router";
import { useCart } from "./cartContext";

export default function Cart() {
  const { cart, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center my-12 bg-white rounded-xl shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold text-black mb-2">Your Cart is Empty</h2>
        <p className="text-black mb-6">Looks like you haven't added anything to your cart yet.</p>
        <Link
          to="/store"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    // Changed h-screen to min-h-screen and added max-w-7xl
    <div className="min-h-screen max-w-7xl mx-auto p-4 sm:p-6">
    
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Shopping Cart 
        </h1>
        
        {/* CLEAR CART BUTTON */}
        <button
          onClick={() => {
            if (window.confirm("Are you sure you want to clear your entire cart?")) {
              clearCart();
            }
          }}
          className="bg-red-100 hover:bg-red-200 text-red-700 text-sm font-semibold px-4 py-2 rounded-lg transition border border-red-200"
        >
          🗑️ Clear Cart
        </button>
      </div>

      {/* Grid container handles mobile-to-desktop responsiveness smoothly */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
       
        {/* Cart Items Column */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-black"
            >
              
              {/* Product Info (Image + Title/Price) */}
              <div className="flex items-center gap-4 w-full sm:w-auto min-w-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 bg-gray-50 p-2 rounded-lg border border-gray-100 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <Link
                    to={`/details/${item.id}`}
                    className="font-semibold text-sm hover:text-blue-600 line-clamp-2 block"
                  >
                    {item.title}
                  </Link>
                  <p className="text-balck font-bold mt-1">
                    ${(item.price ).toFixed(2)}
                  </p>
                  
                </div>
              </div>

              {/* Quantity Controls & Remove Button */}
              <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100">
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-gray-50">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-200 font-bold text-sm"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 text-sm font-semibold bg-white border-x border-gray-300">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-200 font-bold text-sm"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-400 hover:text-red-500 p-1 text-xs sm:text-sm transition uppercase font-semibold"
                  title="Remove item"
                >
                  remove
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Order Summary Sidebar */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-fit text-black w-full">
          <h2 className="text-xl font-bold mb-4 pb-2">Order Summary</h2>

          <div className="space-y-2 mb-4 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal ({totalItems} items)</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span className="text-black font-medium">FREE</span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-lg mb-6">
            <span>Total</span>
            <span className="text-black">${totalPrice.toFixed(2)}</span>
          </div>

          <button
            onClick={() => alert("Proceeding to checkout...")}
            className="w-full bg-black hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition shadow-md"
          >
            Checkout
          </button>
        </div>

      </div>
    </div>
  );
}
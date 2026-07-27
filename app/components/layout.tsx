import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import { CartProvider } from "./cartContext";


export default function Layout() {
  return (

    <div className="min-w-50 bg-blue-400">
      <CartProvider>
      <Header />
      <main >
        
        <Outlet />
       
      </main>
      <Footer/>
       </CartProvider>
    </div>
  );
}

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import Products from "../routes/product-page";

export default function Layout() {
  return (
    <div className="min-w-50 bg-blue-400">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

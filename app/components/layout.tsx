import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import Products from "./products";

export default function Layout() {
  return (
    <div className="min-w-50 ">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

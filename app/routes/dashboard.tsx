import React from "react";
import Navbar from "../components/navbar";
import bgImage from "../assets/images/starry-night.jpeg";    
import Footer from "~/components/footer";
import Product from "~/components/products";

export default function Dashboard() {
    return (
       <div className="bg-blue-400">
        
        <div className="relative h-screen">
          <img
            src={bgImage}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-white font-style-italic">Welcome to the binny buy</h1>
          </div>
        </div>
        <div className="bg-blue-600 text-white py-8 px-4 text-center">
            <p className="text-xl text-white">Get amazing products and deals!</p>
            <Product/>
          </div>
       </div>
           
      
    );
}

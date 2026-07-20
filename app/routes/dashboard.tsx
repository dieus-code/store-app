import React from "react";
import Navbar from "../components/navbar";
import bgImage from "../assets/images/starry-night.jpeg";    
import Footer from "~/components/footer";
import { Link } from "react-router";

export default function Dashboard() {
    return (
       <div className="bg-blue-400">
        
        <div className="relative h-screen">
          <img
            src={bgImage}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
         
             <div className="relative z-10 flex-col items-center justify-center h-screen max-w-4xl mx-auto p-8 text-center bg-transperant rounded-xl shadow-md border border-gray-200">
            <h1 className="text-4xl font-bold text-white font-style-italic">Welcome to the binny buy</h1>
             
        
        <h2 className="text-2xl font-bold text-white my-20 mb-2">SHOP WITH US</h2>
        
        <Link
          to="/home"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Start Shopping
        </Link>
      </div>
          </div>
        
        
        

       </div>
           
      
    );
}

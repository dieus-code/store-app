import React from "react";
import Navbar from "../components/navbar";
import bgImage from "../assets/images/starry-night.jpeg";    
import Footer from "~/components/footer";


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
        
       </div>
           
      
    );
}

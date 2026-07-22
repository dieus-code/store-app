import React from "react";
import natureimg from "../assets/images/Nature.jpeg";  
import storeimg from "../assets/images/store.jpeg";  
import{Link} from "react-router"
export default function AboutPage(){

    return(
       
        <div className="flex-col relative h-screen">
          <img
            src={storeimg}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
       <div className="relative z-10 flex-col items-center justify-center  w-120 mx-auto p-8 text-center backdrop-blur-2xl rounded-xl shadow-md border border-gray-200">
            <h1 className="text-4xl font-bold text-black font-style-italic">Welcome to the binny buy,we ensure all your needs and wants are provided for you with seemless precision and speed</h1>
              <h2 className="text-2xl font-bold text-white my-20 mb-2">SHOP WITH US</h2>
        
        <Link
          to="/home"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Start Shopping
        </Link>
         </div>
        
         </div>
    );
}
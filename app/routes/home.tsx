import React from "react";
import Products from "~/components/products";

export default function Home() {
  return (
    <div className= "container mx-auto p-4 bg-blue-50 text-black">
     <span className="text-xl font-bold"><p>fashion</p></span>
     <span className="text-lg font-bold"><p>mens hats</p></span>
      <div className="flex flex-wrap justify-center gap-4">
     <Products />
      <Products />
       <Products />
        <Products />
        
      </div>
    </div>
  );
}
import React from "react";
import hat from "../assets/images/hat.jpg"; // Import the image
import hat1 from "../assets/model-image/hat1.jpeg"; // Import the images
import hat2 from "../assets/model-image/hat2.jpeg"; // Import the images
import hat3 from "../assets/model-image/hat3.jpeg"; // Import the images
import hat4 from "../assets/model-image/hat4.jpeg"; // Import the images
import Card from "~/components/ card";




export default function ProductPage() {
  return (
    <div className= " justify-center bg-blue-400 w-fit h-screen">
        
     <div className=" flex flex-col bg-white border border-gray-800  w-200 p-4 rounded-lg shadow-md hover:shadow-blue-50 ">
         
           <img src={hat} alt="Product Image" className="w-70 h-70 m-10"/>
           
            <div className="flex flex-col justify-center ml-10 text-cyan-600">
        <p>name: baseball hats</p>
        <p>price: $19.99</p>
        <p>Description of the product.</p>
          </div>
        
      
      
    </div>
    </div>
  );
}

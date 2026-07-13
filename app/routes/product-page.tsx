import React from "react";
import hat from "../assets/images/hat.jpg"; // Import the image
import hat1 from "../assets/model-image/hat1.jpeg"; // Import the images
import hat2 from "../assets/model-image/hat2.jpeg"; // Import the images
import hat3 from "../assets/model-image/hat3.jpeg"; // Import the images
import hat4 from "../assets/model-image/hat4.jpeg"; // Import the images




export default function ProductPage() {
  return (
    <div className="bg-blue-400  h-screen">
        
     <div className=" flex-wrap bg-white border border-gray-800  h-100 p-4 rounded-lg shadow-md hover:shadow-blue-50 transition duration-300" onClick={() => alert("Product clicked!")}>
         
           <img src={hat} alt="Product Image" className="w-70 h-75 m-10"/>
           <img src={hat2} alt="Model Image 2" className="w-70 h-75 m-10 object-cover rounded" />
            <img src={hat3} alt="Model Image 3" className="w-70 h-75 m-10 object-cover rounded" />
            <img src={hat4} alt="Model Image 4" className="w-70 h-75 m-10 object-cover rounded" />
       
      </div>
        <p>name: baseball hats</p>
        <p>price: $19.99</p>
        <p>Description of the product.</p>

      
    </div>
  );
}

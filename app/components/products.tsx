import react from "react";
import hat from "../assets/images/hat.jpg";

export default function Products() {

  return (
    <div >
      
     <div className="bg-blue-400 border border-gray-800 w-70 h-100 p-4 rounded-lg shadow-md hover:shadow-blue-50 transition duration-300 " >
         <div >
          <img src={hat} alt="Product Image" className="w-70 h-75" />
        </div>
        <p>baseball hats</p>
        <p>$19.99</p>
       
      </div>
    </div>
  );
}

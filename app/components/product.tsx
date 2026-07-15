import React from "react";

import {useEffect, useState} from "react";
import { Link } from "react-router-dom";


export default function GetProducts(){
    const [products, setProducts] = useState([]);
useEffect(()=>{
    const fetchProducts = async () => {
        try{
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data);
            console.log(`done`);
        }catch(error){
            console.error("Error fetching products:", error);
        }
    };
    fetchProducts();
},[]);
    return(
        <div className="flex flex-wrap justify-center gap-1">
            {products.map((product: any) => (
                <Link to={`/details/${product.id}`} key={product.id}>
                <div key={product.id} className="flex-wrap  bg-white border border-gray-800 h-fit w-55 p-4 rounded-lg shadow-md hover:shadow-blue-50 justify-content-center align-baseline text-black m-2" >
                    <div className="flex justify-center items-center border-2 border-gray-800 rounded-lg">
                    <img src={product.image} alt={product.title} className="w-40 h-40 m-10 p-4"/>
                   </div>
                    <h3 >Name: {product.title}</h3>
                    <p>price:${product.price.toFixed(2)}</p>

                </div>
                </Link>
            ))}
        </div>
    );
}
import React from "react";
import{useEffect, useState} from "react";
import{useParams} from "react-router-dom";

export default function ProductDetails(){
const {id} = useParams();
const [productdetail, setProductdetail] = useState<any>(null);
useEffect(()=>{
    const fetchProduct = async () => {
        try{
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProductdetail(data);
            console.log(`done`);
        }catch(error){
            console.error("Error fetching product:", error);
        }
    };
    fetchProduct();
},[id]);

    return(
        <div className="flex flex-wrap justify-center gap-1 h-50% w-50%">
            {productdetail ? (
                <div className="flex-wrap  bg-white border border-gray-800 h-fit w-fit p-4 rounded-lg shadow-md hover:shadow-blue-50 justify-content-center align-baseline text-black m-2 h-50% w-zzzzz50%" >
                    <div className="flex justify-center items-center border-2 border-gray-800 rounded-lg w-50% h-25%">
                    <img src={productdetail.image} alt={productdetail.title} />
                    </div>
                    <h1>{productdetail.title}</h1>
                    <p>${productdetail.price.toFixed(2)}</p>
                    <p>{productdetail.description}</p>
                </div>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    );
}
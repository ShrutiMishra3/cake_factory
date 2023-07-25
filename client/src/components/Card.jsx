/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CakeDetails from "../pages/CakeDetails";

export default function Card(cake) {
  
  // Only Display when item in stock > 0
  let inStock = cake.stock > 0 ?  1 : 0;  
  let randomNum = Math.random() * 10;
  let cakeId = cake.id;

  const [ cartItems, setCartItems ] = useState(0);
  function addItemsToCart(){
    console.log(cartItems);
    if(cartItems === "undefined")
      setCartItems(0);
    else
      setCartItems(cartItems+1);
  }
  return (
    <>
    {/* Only Display when item in stock */}
    { inStock == 1 && 
      <div className="card card1 mb-2">
      <Link 
          className="btn" 
          to={`/cake/${parseInt(cakeId)}`}
          element={ <CakeDetails/> } >
        <img src={cake.image} alt={cake.name} className="card--image"/>
        <div className="card-body">
          <h5 className="card-title">{cake.name}</h5>
          <h5 className="card-title bold">₹ <s>{(parseFloat(cake.price) * randomNum).toFixed(2)}</s> {cake.price}</h5>
          <p className="card-text card--title">{cake.description}</p>
          <p className="card-text"><small className="text-body-secondary">In-stock {cake.stock}</small></p>
        </div>
      </Link>
      <div className="container p-2">
        <a href="#" className="btn btn-primary m-2">Buy Now</a>
         {" "}
        <a href="#" className="btn btn-warning m-2" onClick={addItemsToCart}>
          Add to Cart <i className="fas fa-shopping-cart" /> 
          <sup color="red">{cartItems!=0 && cartItems}</sup>
        </a>
      </div>
    </div>
    }
  </>
  );
}

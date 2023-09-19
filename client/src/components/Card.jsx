/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CakeDetails from "../pages/CakeDetails";

import { ShopContext } from "../context/ShopContext";


export default function Card(cake) {
  // Only Display when item in stock > 0
  let inStock = cake.stock > 0 ? 1 : 0;
  let randomNum = Math.random() * 10;
  let cakeId = cake.id;

    // console.log(ShopContext);
  // using the state saved in context
  const { cartItems, addToCart } = useContext(ShopContext);
  // console.log(cartItems);

  const cartAmount = cartItems[cake.id];

  return (
    <>
      {/* Only Display when item in stock */}
      {inStock == 1 && (
        <div className="card card1 mb-2">
          <Link
            className="btn"
            to={`/cake/${parseInt(cakeId)}`}
            element={<CakeDetails />}
          >
            <img src={cake.image} alt={cake.name} className="card--image" />
            <div className="card-body">
              <h5 className="card-title">{cake.name}</h5>
              <h5 className="card-title bold">
                {/* ₹ <s>{(parseFloat(cake.price) * randomNum).toFixed(2)}</s>{" "} */}
                {cake.price}
              </h5>
              <p className="card-text card--title description">
                {cake.description}
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  In-stock {cake.stock}
                </small>
              </p>
            </div>
          </Link>
          <div className="container p-2">
            <a href="#" className="btn btn-primary m-2">
              Buy Now
            </a>{" "}
            <button
              className="btn btn-warning m-2 btn-cart"
              onClick={() => addToCart(cake.id)}
            >
              Add to Cart <i className="fas fa-shopping-cart" /> 
              {/* {cartAmount > 0 && <>({cartAmount})</>} */}
              <sup className="--bs-danger-text-emphasis">{cartAmount > 0  && cartAmount }</sup>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
/*
{
  {0,0,5,7,0},
  {0,0,4,0,4},
  {5,4,0,5,6},
  {7,0,5,0,5},
  {0,4,6,5,0},
}


*/ 
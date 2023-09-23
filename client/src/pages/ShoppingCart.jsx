import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
// import { PRODUCTS } from "../../products";
import data from "../../../cake.json";
import { CartItem } from "./cartItem";
import { useNavigate } from "react-router-dom";
import "../style/cart.css"


function ShoppingCart(){
  
  // let response = fetch("127.0.0.1:5500/api/cake");
  const [cakes, setCakes] = useState([])

  const fetchCakeData = () => {
    fetch("http://ec2-13-235-71-128.ap-south-1.compute.amazonaws.com:5500/api/cake")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setCakes(data)
      })
  }

  useEffect(() => {
    fetchCakeData()
  }, [])
  console.log(cakes);

  
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart container mt-5">
      <div className="row">
        <div className="col">
          <h1>Your Cart Items</h1>
        </div>
      </div>
      <div className="row items">
        {data.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id}/>;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="row mt-4">
          <div className="col-md-6">
            <p className="mb-0 display-6">Subtotal: ₹{totalAmount}</p>
          </div>
          <br />
          <div className="col-md-6 d-flex justify-content-end">
            <button
              className="btn btn-warning me-2"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>
            <button
              className="btn btn-outline-warning"
              onClick={() => {
                checkout();
                navigate("/checkout");
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <h1>Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
}

export default ShoppingCart;
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { CartItem } from "./cartItem";
import { Link, useNavigate } from "react-router-dom";
import "../style/cart.css";

function ShoppingCart() {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  // Fetch cake data and store it in the "cakes" state
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    async function fetchCakeData() {
      try {
        const response = await fetch(
          import.meta.env.VITE_APP_ORIGIN + "/api/cake"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCakes(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchCakeData();
  }, []);

  // Function to handle the back button click
  const handleBackClick = () => {
    navigate(-1); // Use navigate(-1) to navigate back to the previous page
  };

  return (
    <>
      <div className="container mt-5">
        <button
          className="btn btn-sm btn-outline-dark m-2"
          onClick={handleBackClick}
        >
          <i className="fa-solid fa-reply"></i> Back
        </button>
        <div className="row">
          <div className="col">
            <h1>Your Cart Items</h1>
          </div>
        </div>
        <div className="row items">
          {cakes.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} key={product.id} />;
            }
            return null; // You should add this to avoid potential rendering issues.
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
              <Link to="/checkout" className="btn btn-outline-warning">
                <i className="fa-solid fa-file-invoice"></i> Checkout
              </Link>
            </div>
          </div>
        ) : (
          <h1>Your Shopping Cart is Empty</h1>
        )}
      </div>
    </>
  );
}

export default ShoppingCart;

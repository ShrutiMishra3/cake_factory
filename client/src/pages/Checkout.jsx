import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  // State to store user input for payment method
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  // Function to handle the back button click
  const handleBackClick = () => {
    navigate(-1); // Use navigate(-1) to navigate back to the previous page
  };

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if(e.target.paymentMethod){
      alert("Order failed.!");
      navigate("/cart");
    }else{
      checkout();
      alert("Your order has been placed successfully!");
      navigate("/");
    }
  };

  return (
    <div className="container mt-5">
      <button
        className="btn btn-sm btn-outline-dark m-2"
        onClick={handleBackClick}
      >
        <i className="fa-solid fa-reply"></i> Back
      </button>
      <div className="row">
        <div className="col">
          <h1>Checkout</h1>
        </div>
      </div>

      <form>
        <div className="row mt-4">
          <div className="col-md-6">
            <p className="mb-0 display-6">Subtotal: ₹{totalAmount}</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <h3>Select Payment Method:</h3>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                id="creditCard"
                value="creditCard"
                checked={paymentMethod === "creditCard"}
                onChange={() => setPaymentMethod("creditCard")}
                required
              />
              <label className="form-check-label" htmlFor="creditCard">
                Credit Card
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                id="paypal"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
                required
              />
              <label className="form-check-label" htmlFor="paypal">
                PayPal
              </label>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <button className="btn btn-outline-success" onClick={handleSubmit}>
              Pay Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Checkout;

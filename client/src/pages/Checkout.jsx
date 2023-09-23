import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  console.log("ToTAL: ",totalAmount);

  // State to store user input for address and payment
  const [address, setAddress] = useState("");
  const [paymentInfo, setPaymentInfo] = useState("");

  // Function to handle the back button click
  const handleBackClick = () => {
    navigate(-1); // Use navigate(-1) to navigate back to the previous page
  };

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    checkout();
    alert("Your Order placed successfully");
    navigate("/");
    // Validate and handle the address and payment data
    // if (address && paymentInfo) {
    //   // You can implement your payment logic here

    //   alert("ORDER PLACED.");
    //   // After successful payment, you can navigate to a thank you page or home page
    //   navigate("/"); // Replace "/thankyou" with the actual thank you page route
    // } else {
    //   alert("Please enter both address and payment information.");
    // }
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
    </div>
  );
}

export default Checkout;

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Card = (cake) => {
  const { cartItems, addToCart } = useContext(ShopContext);
  const inStock = cake.stock > 0 ? 1 : 0;
  const cakeId = cake.id;
  const cartAmount = cartItems[cake.id];

  // State to track whether the button has been clicked
  const [buttonClicked, setButtonClicked] = useState(false);

  // Function to handle the "Add to Cart" button click
  const handleAddToCartClick = () => {
    // Update the buttonClicked state to true
    setButtonClicked(true);

    // Add the item to the cart
    addToCart(cake.id);
  };

  return (
    <>
      {inStock === 1 && (
        <div className="card card1 mb-2">
          <Link to={`/cake/${parseInt(cakeId)}`} style={{ textDecoration: "none", color: "inherit" }}>
            <img src={cake.image} alt={cake.name} className="card--image" />
            <div className="card-body">
              <div className="card-content">
                <h5 className="card-title">{cake.name}</h5>
                <h5 className={`card-title bold ${buttonClicked ? "added-to-cart" : ""}`}>₹ {cake.price}</h5>
              </div>
              <p className="card-text card--title description">
                <span className="truncate-2-lines">{cake.description}</span>
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  In-stock: {cake.stock}
                </small>
              </p>
            </div>
          </Link>
          <div className="container p-2">
            <a href="#" className="btn btn-primary m-2">
              Buy Now
            </a>{" "}
            <button
              className={`btn btn-warning m-2 btn-cart ${buttonClicked ? "button-clicked" : ""}`}
              onClick={handleAddToCartClick}
            >
              {buttonClicked ? "Added to Cart" : "Add to Cart"}{" "}
              <i className="fas fa-shopping-cart" />
              {cartAmount > 0 && (
                <sup className="--bs-danger-text-emphasis">{cartAmount}</sup>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
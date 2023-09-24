import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Card = (cake) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  const { id, stock, name, image, description, price } = cake;

  const inStock = stock > 0;
  const cartAmount = cartItems[id];


  // State to track whether the button has been clicked
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleAddToCartClick = () => {
    setButtonClicked(true);
    addToCart(id);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  const handleAddToCart = () => {
    addToCart(id);
  };

  const handleItemCountChange = (e) => {
    const newCount = Number(e.target.value);
    updateCartItemCount(newCount, id);
  };

  return (
    <>
      {inStock && (
        <div className="card card1 mb-2">
          <Link to={`/cake/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <img src={image} alt={name} className="card--image" />
            <div className="card-body">
              <div className="card-content">
                <h5 className="card-title">{name}</h5>
                <h5 className={`card-title bold ${buttonClicked ? "added-to-cart" : ""}`}>₹ {price}</h5>
              </div>
              <p className="card-text card--title description">
                <span className="truncate-2-lines">{description}</span>
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  In-stock: {stock}
                </small>
              </p>
            </div>
          </Link>
          <div className="container p-2">
              {!cartItems[id] ? (
                <button
                className="btn btn-warning p-2"
                onClick={handleAddToCartClick}
              >Add to cart <i className="fas fa-shopping-cart" />
            </button>
              ) : (
                <div className="row g-1 align-items-center">
                  <div className="col-auto">
                    <button
                      className="btn btn-danger"
                      onClick={handleRemoveFromCart}
                    >
                      -
                    </button>
                  </div>
                  <div className="col-auto">
                    <input
                      type="number"
                      className="form-control"
                      value={cartItems[id]}
                      onChange={handleItemCountChange}
                      min={0}
                    />
                  </div>
                  <div className="col-auto">
                    <button
                      className="btn btn-success"
                      onClick={handleAddToCart}
                    >
                      +
                    </button>
                  </div>
                </div>
              )}{" "}
          </div>
        </div>
      )}
    </>
  );
};

export default Card;

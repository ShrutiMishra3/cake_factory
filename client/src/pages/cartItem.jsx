import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export const CartItem = ( props ) => {
  const { id, name, price, image, description } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

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
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} alt="Card image" className="img-fluid" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <div className="row g-3 align-items-center">
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
            <p className="card-text mt-3">Price: ₹{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

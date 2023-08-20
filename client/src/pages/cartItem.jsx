import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import "../style/cart.css"

export const CartItem = (props) => {
    const { id, name, price, image, description } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
        useContext(ShopContext);

    return (
        <>
            <div className="card w-75">
                    <img className="img-thumbnail" src={image} alt="Card image" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    {/* <a href="#" className="btn btn-primary">Button</a> */}
                    <div className="countHandler">
                            <button
                                onClick={() => removeFromCart(id)}> - </button>
                            <input
                                value={cartItems[id]}
                                onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                            />
                            <button
                                onClick={() => addToCart(id)}> + </button>
                    </div>
                </div>
                <div className="card-footer">
                    <p className="card-title title">Price: ₹{price}</p>
                </div>
            </div>
            {/* <div className="cartItem">
                <div>

                    <img src={image} />
                    <div className="description">
                        <p>
                            <b>{name}</b>
                        </p>
                        <p>{description}</p>
                        <p> Price: ₹{price}</p>
                        <div className="countHandler">
                            <button
                                onClick={() => removeFromCart(id)}> - </button>
                            <input
                                value={cartItems[id]}
                                onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                            />
                            <button
                                onClick={() => addToCart(id)}> + </button>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
};
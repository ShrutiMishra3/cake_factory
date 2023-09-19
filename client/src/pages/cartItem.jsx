import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import "../style/cart.css"

export const CartItem = (props) => {
    const { id, name, price, image, description } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
        useContext(ShopContext);

    return (
        <>
            <div className="cart-item">
                <div>
                    <img src={image} alt="Card image" />
                </div>
                <div>
                    <h5>{name}</h5>
                    <p className="description">{description}</p>
                    {/* <a href="#" ="btn btn-primary">Button</a> */}
                    <div className="row g-3 countHandler">
                        <div className="col-sm-2">
                            <button className="btn btn-danger input-group-text"
                                onClick={() => removeFromCart(id)}> - </button>
                            <input
                                type="text" className="form-control"
                                value={cartItems[id]}
                                onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                            />
                            <button className="btn btn-danger input-group-text"
                                onClick={() => addToCart(id)}> + </button>
                        </div>
                    </div>
                    <div>
                        <p>Price: ₹{price}</p>
                    </div>
                </div>
            </div>
            {/* <hr className="hr"/> */}
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
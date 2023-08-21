// import data from "../../../cake.json";

// function ShoppingCart() {
//   // Fetch shopping cart items from API or state
//   // For example:
//   const cartItems = [
//     { id: 1, name: 'Unbranded Cotton Bacon', price: 249.0, quantity: 2 },
//     { id: 2, name: 'Delicious Chocolate Cake', price: 25.99, quantity: 1 },
//   ];

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       {cartItems.map((item) => (
//         <div key={item.id}>
//           <p>{item.name}</p>
//           <p>Price: ${item.price}</p>
//           <p>Quantity: {item.quantity}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ShoppingCart;


import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
// import { PRODUCTS } from "../../products";
import data from "../../../cake.json";
import { CartItem } from "./cartItem";
import { useNavigate } from "react-router-dom";
import "../style/cart.css"


function ShoppingCart(){
  
  // let response = fetch("127.0.0.1:5500/api/cake");
  const [cakes, setCakes] = useState([])

  const fetchCakeData = () => {
    fetch("http://127.0.0.1:5500/api/cake")
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
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="items">
        {data.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id}/>;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ₹{totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
}

export default ShoppingCart;
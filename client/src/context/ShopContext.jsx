import React, { createContext, useState, useEffect } from "react";

import data from "../../../cake.json";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < data.length; i++) {
    cart[data[i].id] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
  
    const getTotalCartAmount = () => {
      let totalAmount = 0;
      for (const item in cartItems) {
        if (cartItems[item] > 0) {
          let itemInfo = data.find((product) => product.id === Number(item));
          totalAmount += cartItems[item] * itemInfo.price;
        }
      }
      return totalAmount;
    };
  
    const addToCart = (itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };
  
    const removeFromCart = (itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };
  
    const updateCartItemCount = (newAmount, itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };
  
    const checkout = () => {
      setCartItems(getDefaultCart());
    };

    for(const key in cartItems){
        if(cartItems[key] > 0)
            console.log(key, cartItems[key])
    }
  
    const contextValue = {
      cartItems,
      addToCart,
      updateCartItemCount,
      removeFromCart,
      getTotalCartAmount,
      checkout,
    };
  
    return (
      <ShopContext.Provider value={contextValue}>
        {props.children}
      </ShopContext.Provider>
    );
  };

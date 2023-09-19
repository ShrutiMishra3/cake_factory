import React, { createContext, useState } from "react";
import data from "../../../cake.json";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  return Object.fromEntries(data.map((item) => [item.id, 0]));
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    return Object.keys(cartItems).reduce((totalAmount, itemId) => {
      if (cartItems[itemId] > 0) {
        const itemInfo = data.find((product) => product.id === Number(itemId));
        return totalAmount + cartItems[itemId] * itemInfo.price;
      }
      return totalAmount;
    }, 0);
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  Object.keys(cartItems).forEach((key) => {
    if (cartItems[key] > 0) console.log(key, cartItems[key]);
  });

  const contextValue = {
    cartItems,
    addToCart: (itemId) => updateCartItemCount(cartItems[itemId] + 1, itemId),
    removeFromCart: (itemId) => updateCartItemCount(cartItems[itemId] - 1, itemId),
    updateCartItemCount,
    getTotalCartAmount,
    checkout,
  };

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};

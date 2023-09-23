import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(import.meta.env.VITE_APP_ORIGIN);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);

        // Calculate the initial cart items based on fetched data
        const defaultCart = Object.fromEntries(jsonData.map((item) => [item.id, 0]));
        setCartItems(defaultCart);

        // Logging the fetched data
        console.log("DefaultCart:  ",defaultCart);
        console.log("DATA: ",jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

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
    // Reset cart to its initial state
    const defaultCart = Object.fromEntries(data.map((item) => [item.id, 0]));
    setCartItems(defaultCart);
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
    isLoading, // You can use this isLoading flag for conditional rendering
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {isLoading ? <div>Loading...</div> : props.children}
    </ShopContext.Provider>
  );
};

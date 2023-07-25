import React from 'react';

function ShoppingCart() {
  // Fetch shopping cart items from API or state
  // For example:
  const cartItems = [
    { id: 1, name: 'Unbranded Cotton Bacon', price: 249.0, quantity: 2 },
    { id: 2, name: 'Delicious Chocolate Cake', price: 25.99, quantity: 1 },
  ];

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart;

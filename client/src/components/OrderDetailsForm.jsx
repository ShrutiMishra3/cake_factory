import React, { useState } from 'react';

const OrderDetailsForm = () => {
  const [order, setOrder] = useState({
    userId: '',
    items: '',
    totalPrice: 0,
    status: '',
    shippingAddress: '',
    paymentMethod: '',
    createdAt: '',
    updatedAt: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Order:', order);
  };

  return (
    <div>
      <h2>Order Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userId">User ID:</label>
        <input type="text" id="userId" name="userId" value={order.userId} onChange={handleChange} required /><br /><br />

        <label htmlFor="items">Items:</label>
        <textarea id="items" name="items" value={order.items} onChange={handleChange} required></textarea><br /><br />

        <label htmlFor="totalPrice">Total Price:</label>
        <input type="number" id="totalPrice" name="totalPrice" value={order.totalPrice} onChange={handleChange} step="0.01" required /><br /><br />

        <label htmlFor="status">Status:</label>
        <input type="text" id="status" name="status" value={order.status} onChange={handleChange} required /><br /><br />

        <label htmlFor="shippingAddress">Shipping Address:</label>
        <textarea id="shippingAddress" name="shippingAddress" value={order.shippingAddress} onChange={handleChange} required></textarea><br /><br />

        <label htmlFor="paymentMethod">Payment Method:</label>
        <input type="text" id="paymentMethod" name="paymentMethod" value={order.paymentMethod} onChange={handleChange} required /><br /><br />

        <label htmlFor="createdAt">Created At:</label>
        <input type="datetime-local" id="createdAt" name="createdAt" value={order.createdAt} onChange={handleChange} required /><br /><br />

        <label htmlFor="updatedAt">Updated At:</label>
        <input type="datetime-local" id="updatedAt" name="updatedAt" value={order.updatedAt} onChange={handleChange} required /><br /><br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default OrderDetailsForm;

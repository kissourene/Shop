import React, { useState } from 'react';

const Checkout = ({ cartItems }) => {
  const [total, setTotal] = useState(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0));

  return (
    <form className="checkout-form">
      <h2>Checkout</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.name}>
            {item.name} x{item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
      <button type="submit">Place Order</button>
    </form>
  );
};

export default Checkout;

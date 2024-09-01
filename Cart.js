import React from 'react';

const Cart = ({ name, price, quantity }) => {
  return (
    <div className="cart-item">
      <h3>{name}</h3>
      <p>Quantité : {quantity}</p>
      <p>Total : ${price * quantity}</p>
      <button onClick={() => alert(`Retirer ${name} du panier`)}>
        Retirer
      </button>
    </div>
  );
};

export default Cart;

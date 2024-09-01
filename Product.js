import React from 'react';

const Product = ({ name, price, image, addToCart }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={() => addToCart(name)}>addToCart</button>
    </div>
  );
};

export default Product;

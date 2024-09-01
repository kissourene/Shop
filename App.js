// src/App.js
import React, { useState } from 'react';
import ProductCard from './components/Product';
import CartItem from './components/Cart';
import CheckoutForm from './components/Checkout';

function App() {
  const [products, setProducts] = useState([
    { name: "Product A", price: 19.99, image: "https://via.placeholder.com/150" },
    { name: "Product B", price: 29.99, image: "https://via.placeholder.com/150" },
    { name: "Product C", price: 39.99, image: "https://via.placeholder.com/150" },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (name) => {
    setCartItems(prevItems => prevItems.concat({ name, quantity: 1 }));
  };

  const removeItem = (name) => {
    setCartItems(prevItems => prevItems.filter(item => item.name !== name));
  };

  return (
    <div className="app">
      <h1>Shopping Cart</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard
            key={product.name}
            {...product}
            addToCart={addToCart}
          />
        ))}
      </div>
      <div className="cart">
        <h2>Your Cart:</h2>
        <ul>
          {cartItems.map(item => (
            <CartItem 
            key={item.name}
             {...item}
             removeItem={removeItem}
             />
          ))}
        </ul>
        <CheckoutForm cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import ProductCard from "./components/ProductCard";

export default function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, title: "Running Shoes", price: 59.99 },
    { id: 2, title: "Backpack", price: 39.99 }
  ];

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div>
      <h1>Store</h1>
      <p>Cart Items: {cart.length}</p>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={addToCart}
        />
      ))}
    </div>
  );
}
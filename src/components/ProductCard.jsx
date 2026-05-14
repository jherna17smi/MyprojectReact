import React from "react";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}
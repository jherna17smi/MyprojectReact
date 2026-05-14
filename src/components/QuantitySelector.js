// src/components/QuantitySelector.js
import React, { useState } from "react";

export default function QuantitySelector() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <p>Quantity: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)} disabled={count === 1}>
        Decrease
      </button>
    </div>
  );
}

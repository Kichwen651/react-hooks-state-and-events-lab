
import React, { useState } from "react";

function Item({ name, category }) {
  // Step 1: Set up state to track if the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Step 2: Create a function to toggle the cart state
  const toggleCart = () => {
    setInCart(prevInCart => !prevInCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* Step 3: Update button text and onClick handler */}
      <button className="add" onClick={toggleCart}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;

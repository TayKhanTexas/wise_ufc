import React from 'react';
import './Cart.css';

const Cart = () => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <label>
        Name: <input type="text" />
      </label>
      <label>
        Message: <textarea />
      </label>
      {/* Add logic to show selected items and calculate total */}
    </div>
  );
}

export default Cart;

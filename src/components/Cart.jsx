import React from 'react';
import './Cart.css';

const Cart = () => {
  return (
    <div className="cart">
      <h2>Show Leon "Rocky" Edwards Your Support</h2>
      <input type="text" placeholder="Name or your social" />
      <textarea placeholder="Your message"></textarea>
      {/* Add logic to show selected items and calculate total */}
    </div>
  );
}

export default Cart;

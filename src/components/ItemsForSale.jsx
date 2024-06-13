import React, { useState } from 'react';
import './ItemsForSale.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import costaLatte from '../assets/costa_latte.png';
import triventoBottle from '../assets/trivento_bottle.jpg';

const ItemsForSale = () => {
  const [selectedItems, setSelectedItems] = useState({});

  const items = [
    { id: 1, name: 'Head kick KO of Kamaru Usman', price: '$5', gifUrl: 'https://giphy.com/embed/1uyVpLU0nP5IMiO3q2' },
    { id: 2, name: 'Bitch slap of Colby Covington', price: '$5', gifUrl: 'https://giphy.com/embed/PiiO620BR47XQAcNjM' },
    { id: 3, name: 'Waking up Nate Diaz', price: '$5', gifUrl: 'https://giphy.com/embed/VrKy8X3SdOMgIsy5P5' },
    { id: 4, name: 'Finishing Belal Muhammed', price: '$5', gifUrl: 'https://giphy.com/embed/lf06m6wCeIpTi7d2OX' },
    { id: 5, name: 'Costa Latte', price: '$5', imageUrl: costaLatte },
    { id: 6, name: 'Wetherspoon Glass of Trivento Red Wine', price: '$8', gifUrl: 'https://giphy.com/embed/ng6NcNAvohN6M' },
    { id: 7, name: 'Wetherspoon Bottle of Trivento Red Wine', price: '$70', imageUrl: triventoBottle },
    { id: 8, name: 'Bedders Fish & Chips', price: '$10', gifUrl: 'https://giphy.com/embed/HftWxnIySNoas' },
    { id: 9, name: 'McDonalds Big Mac and Fries', price: '$10', gifUrl: 'https://giphy.com/embed/MwTM1MprLLh9OLBRkP' }
  ];

  const handleSelectQuantity = (id, quantity) => {
    setSelectedItems({
      ...selectedItems,
      [id]: quantity
    });
  };

  return (
    <div className="items-for-sale">
      {items.map(item => (
        <div key={item.id} className="item">
          {item.gifUrl ? (
            <iframe
              src={item.gifUrl}
              width="480"
              height="266"
              frameBorder="0"
              className="gif-embed"
              allowFullScreen
              title={item.name}
            ></iframe>
          ) : (
            <img
              src={item.imageUrl}
              alt={item.name}
              width="480"
              height="266"
              className="image-embed"
            />
          )}
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <div className="quantity">
            {[1, 3, 5].map(quantity => (
              <span
                key={quantity}
                className={`quantity-icon ${selectedItems[item.id] === quantity ? 'selected' : ''}`}
                onClick={() => handleSelectQuantity(item.id, quantity)}
              >
                {quantity}
              </span>
            ))}
            <span
              className={`quantity-icon ${selectedItems[item.id] && ![1, 3, 5].includes(selectedItems[item.id]) ? 'selected' : ''}`}
            >
              <input
                type="text"
                placeholder="Qty"
                onBlur={(e) => handleSelectQuantity(item.id, parseInt(e.target.value) || '')}
              />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsForSale;

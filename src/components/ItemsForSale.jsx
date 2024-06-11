import React from 'react';
import './ItemsForSale.css';

const items = [
  { name: 'Head kick KO of Kamaru Usman', price: '$5', url: 'https://www.youtube.com/watch?v=cEOJW1jMR4I' },
  { name: 'Bitch slap of Colby Covington', price: '$5', url: 'https://www.youtube.com/watch?v=RDwHE8bFUSM' },
  { name: 'Waking up Nate Diaz', price: '$5', url: 'https://www.youtube.com/watch?v=2EMVfEXQxrg' },
  { name: 'finishing Belal Muhammed', price: '$5', url: 'https://www.youtube.com/watch?v=areenbJuBNc' },
  { name: 'Costco Latte', price: '$5', url: '#' },
  { name: 'Wetherspoon Glass of Trivento Red Wine', price: '$8', url: '#' },
  { name: 'Wetherspoon Bottle of Trivento Red Wine', price: '$70', url: 'https://www.jdwetherspoon.com/drink/red-wine' },
  { name: 'Bedders Fish & chips', price: '$10', url: '#' },
  { name: 'McDonalds Big Mac and fries', price: '$10', url: '#' },
];

const ItemsForSale = () => {
  return (
    <div className="items-for-sale">
      {items.map((item, index) => (
        <div key={index} className="item">
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <img src="placeholder.gif" alt={item.name} />
            <p>{item.name} - {item.price}</p>
          </a>
          <div className="quantity">
            <label>
              <input type="radio" name={`qty-${index}`} value="1" /> 1
            </label>
            <label>
              <input type="radio" name={`qty-${index}`} value="3" /> 3
            </label>
            <label>
              <input type="radio" name={`qty-${index}`} value="5" /> 5
            </label>
            <label>
              <input type="text" placeholder="Custom qty" />
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemsForSale;

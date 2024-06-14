import React, { useState } from 'react';
import './MonthlySupport.css';
import support499 from '../assets/499monthlysupport.jpg';
import support999 from '../assets/999monthlysupport.jpg';
import support2999 from '../assets/2999monthlysupport.jpg';

const MonthlySupport = () => {
  const [selectedItems, setSelectedItems] = useState({});

  const items = [
    { id: 9, name: 'Bronze Monthly Support', price: '$4.99', imageUrl: support499 },
    { id: 10, name: 'Silver Monthly Support', price: '$9.99', imageUrl: support999 },
    { id: 11, name: 'Gold Monthly Support', price: '$29.99', imageUrl: support2999 },
  ];

  const handleSelectItem = (id) => {
    setSelectedItems({
      ...selectedItems,
      [id]: (selectedItems[id] || 0) + 1
    });
  };

  return (
    <div className="monthly-support">
      <h2>Monthly Support Options</h2>
      <div className="support-items">
        {items.map(item => (
          <div key={item.id} className="item" onClick={() => handleSelectItem(item.id)}>
            <img src={item.imageUrl} alt={item.name} className="image-embed" />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlySupport;

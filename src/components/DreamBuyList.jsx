import React from 'react';
import './DreamBuyList.css';

const dreamItems = [
  { name: 'Harley Davidson Tri Glide Ultra', price: '£32999', url: 'https://www.harleyworldchesterfield.co.uk/bikes-in-stock/harley-davidson/tri-glide%C2%AE-ultra/217845.htm' },
  { name: 'Rolex Datejust', price: '£16500', url: 'https://www.rolex.com/en-us/watches/datejust/m126284rbr-0023#/m126284rbr-0023/dial' },
];

const DreamBuyList = () => {
  return (
    <div className="dream-buy-list">
      {dreamItems.map((item, index) => (
        <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
          <img src="placeholder.jpg" alt={item.name} />
          <p>{item.name} - {item.price}</p>
        </a>
      ))}
    </div>
  );
}

export default DreamBuyList;

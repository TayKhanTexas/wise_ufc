import React from 'react';
import './DreamBuyList.css';
import dreamRolex from '../assets/dream_rolex.jpg';
import dreamThunderbike from '../assets/dream_thunderbike.jpg';

const dreamItems = [
  { name: 'Harley Davidson Burning Skull', price: '£32999', imageUrl: dreamThunderbike, url: 'https://www.thunderbike.com/custombikes/burning-skull/' },
  { name: 'Rolex Datejust', price: '£16500', imageUrl: dreamRolex, url: 'https://www.rolex.com/watches/datejust/m126284rbr-0023#/m126284rbr-0023/dial' },
];

const DreamBuyList = () => {
  return (
    <div className="dream-buy-list">
      <h2>Spoil Me Gifts</h2>
      {dreamItems.map((item, index) => (
        <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="dream-item">
          <img src={item.imageUrl} alt={item.name} className="dream-image" />
          <p>{item.name} - {item.price}</p>
        </a>
      ))}
    </div>
  );
}

export default DreamBuyList;


import React from 'react';
import './SpecialOffers.css';

const specialOffers = [
  { name: '30 Sec birthday video message', price: '$1000.00', input: true},
  { name: '30 Sec video message', price: '$1000.00', input: true },
  { name: 'After Win Callout (via Wise)', price: '$20000.00', input: true },
  { name: '15-minute call (via Wise)', price: '$10000.00' , input: true},
];

const SpecialOffers = () => {
  return (
    <div className="special-offers">
      {specialOffers.map((offer, index) => (
        <div key={index} className="offer">
          <p>{offer.name} - {offer.price}</p>
          {offer.input && <input type="text" placeholder="Enter details" />}
        </div>
      ))}
    </div>
  );
}

export default SpecialOffers;

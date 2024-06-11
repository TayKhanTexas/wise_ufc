import React from 'react';
import './Sponsors.css';

const sponsors = [
  { name: 'KNGS Athlete Management', url: 'https://www.instagram.com/kngs_athletemanagement/?hl=en' },
  { name: 'RDX Sports', url: 'https://www.instagram.com/rdx_sports/?hl=en' },
  { name: 'MyProtein', url: 'https://www.instagram.com/myprotein/?hl=en' },
  { name: 'Montirex', url: 'https://www.instagram.com/montirex/?hl=en' },
];

const Sponsors = () => {
  return (
    <div className="sponsors">
      {sponsors.map((sponsor, index) => (
        <a key={index} href={sponsor.url} target="_blank" rel="noopener noreferrer">
          <img src="placeholder-logo.png" alt={sponsor.name} />
          <p>{sponsor.name}</p>
        </a>
      ))}
    </div>
  );
}

export default Sponsors;

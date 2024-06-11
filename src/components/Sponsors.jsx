import React from 'react';
import './Sponsors.css';
import logoRdx from '../assets/logo_rdx.png';
import logoMontirex from '../assets/logo_montirex.png';

const Sponsors = () => {
  return (
    <div className="sponsors-container">
      <div className="sponsors left">
        <a href="https://www.instagram.com/kngs_athletemanagement/?hl=en" target="_blank" rel="noopener noreferrer">
          <img src="https://via.placeholder.com/100" alt="KNGS Athlete Management" />
        </a>
        <a href="https://www.instagram.com/rdx_sports/?hl=en" target="_blank" rel="noopener noreferrer">
          <img src={logoRdx} alt="RDX Sports" />
        </a>
        <a href="https://www.instagram.com/myprotein/?hl=en" target="_blank" rel="noopener noreferrer">
          <img src="https://via.placeholder.com/100" alt="MyProtein" />
        </a>
      </div>
      <div className="sponsors right">
        <a href="https://www.instagram.com/montirex/?hl=en" target="_blank" rel="noopener noreferrer">
          <img src={logoMontirex} alt="Montirex" />
        </a>
        <a href="https://www.instagram.com/myprotein/?hl=en" target="_blank" rel="noopener noreferrer">
          <img src="https://via.placeholder.com/100" alt="MyProtein" />
        </a>
        <a href="https://www.instagram.com/kngs_athletemanagement/?hl=en" target="_blank" rel="noopener noreferrer">
          <img src="https://via.placeholder.com/100" alt="KNGS Athlete Management" />
        </a>
      </div>
    </div>
  );
};

export default Sponsors;


import React from 'react';
import './Banner.css';
import logoRdx from '../assets/logo_rdx.png';
import logoMontirex from '../assets/logo_montirex.png';
import logoKngs from '../assets/logo_kngs.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  return (
    <div className="banner">
      <h1>Leon "Rocky" Edwards</h1>
      <div className="sponsors-container">
        <div className="sponsors">
          <a href="https://www.instagram.com/kngs_athletemanagement/?hl=en" target="_blank" rel="noopener noreferrer">
            <img src={logoKngs} alt="KNGS Athlete Management" />
          </a>
          <a href="https://www.instagram.com/rdx_sports/?hl=en" target="_blank" rel="noopener noreferrer">
            <img src={logoRdx} alt="RDX Sports" />
          </a>
          <a href="https://www.instagram.com/montirex/?hl=en" target="_blank" rel="noopener noreferrer">
            <img src={logoMontirex} alt="Montirex" />
          </a>
        </div>
      </div>
      <nav>
        <a href="https://www.instagram.com/leonedwardsmma" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://x.com/leon_edwardsmma" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://leonedwards.store/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faStore} />
        </a>
        <a href="https://www.ufc.com/athlete/leon-edwards" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://www.tiktok.com/@leonedwardsmma.official" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
        <a href="https://www.facebook.com/LeonEdwardsMMA/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </nav>
    </div>
  );
};

export default Banner;

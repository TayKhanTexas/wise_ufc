import React from 'react';
import './Banner.css';
import logoRdx from '../assets/logo_rdx.png';
import logoMontirex from '../assets/logo_montirex.png';
import logoKngs from '../assets/logo_rdx.png'; // Adjust this if there's a different logo file for KNGS
import bannerImageLeft from '../assets/banner_image_left.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Banner = () => {
  return (
    <div className="banner">
      <h1>Leon "Rocky" Edwards</h1>
      <div className="sponsors-container">
        <img src={bannerImageLeft} alt="Banner Left" className="banner-left-image" />
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
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.ufc.com/athlete/leon-edwards" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </nav>
    </div>
  );
};

export default Banner;

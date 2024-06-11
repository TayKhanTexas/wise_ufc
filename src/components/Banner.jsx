import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <h1>Leon "Rocky" Edwards</h1>
      <nav>
        <a href="https://www.instagram.com/leonedwardsmma" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://x.com/leon_edwardsmma" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://leonedwards.store/" target="_blank" rel="noopener noreferrer">Store</a>
        <a href="https://www.ufc.com/athlete/leon-edwards" target="_blank" rel="noopener noreferrer">UFC Profile</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Youtube</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Tiktok</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
      </nav>
    </div>
  );
}

export default Banner;

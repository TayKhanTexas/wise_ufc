import React from 'react';
import Banner from './components/Banner';
import ItemsForSale from './components/ItemsForSale';
import Cart from './components/Cart';
import SpecialOffers from './components/SpecialOffers';
import DreamBuyList from './components/DreamBuyList';
import SocialMediaFeed from './components/SocialMediaFeed';
import Posts from './components/Posts';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Banner />
      <div className="main-content">
        <div className="items-and-cart">
          <ItemsForSale />
          <SpecialOffers />
        </div>
        <Cart />
      </div>
      <DreamBuyList />
      <SocialMediaFeed />
      <Posts />
    </div>
  );
};

export default App;

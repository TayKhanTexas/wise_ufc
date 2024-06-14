import React from 'react';
import Banner from './components/Banner';
import BuyItems from './components/Buyitems';
import MonthlySupport from './components/MonthlySupport';
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
          <BuyItems />
          <MonthlySupport />
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

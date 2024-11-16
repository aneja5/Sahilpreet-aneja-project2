import React from 'react';
import Navbar from './Navbar';
import './HomePage.css';
import logo from './explode.png';

const HomePage = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-title">
        <img src={logo} className='minesweeper-logo'/>
        Minesweeper
      </div>
    </div>
  );
};

export default HomePage;

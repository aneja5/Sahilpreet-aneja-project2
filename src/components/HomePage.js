import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import logo from './explode.png';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="home-button-container">
          <Link to="/rules" className="home-button">Rules</Link>
          <Link to="/game/easy" className="home-button">Play</Link>
        </div>
      </header>
      <div className="home-title">
        <img src={logo} className='minesweeper-logo'/>
        Minesweeper
      </div>
    </div>
  );
};

export default HomePage;

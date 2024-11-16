import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/rules" className="navbar-link">Rules</Link>
          <Link to="/game/easy" className="navbar-link">Play</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

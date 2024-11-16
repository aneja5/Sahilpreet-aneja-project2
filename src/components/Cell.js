import React from 'react';
import { Link } from 'react-router-dom';
import './Cell.css';
import bomb from './explode.png';

const Cell = ({ cell, onClick }) => {
  const handleClick = () => {
    if (!cell.isOpen) {
      onClick();
    }
  };

  return (
    <div
      className={`cell ${cell.isOpen ? 'open' : ''}`}
      onClick={handleClick}
    >
      {cell.isOpen && cell.isMine ? (
        <img src={bomb} className="bomb-logo" alt="Mine" />
      ) : (
        cell.isOpen && cell.adjacentMines > 0 ? cell.adjacentMines : ''
      )}
    </div>
  );
};

export default Cell;

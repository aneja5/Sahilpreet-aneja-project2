import React from 'react';
import { Link } from 'react-router-dom';
import './RulesPage.css';

const RulesPage = () => {
  return (
    <div className="rules-container">
      <header className="header">
        <div className="button-container">
          <Link to="/" className="button">Home</Link>
          <Link to="/game/easy" className="button">Play</Link>
        </div>
      </header>
      <div className="rules-content">
        <h2 className="rules-header">Objective</h2>
        <p className="rule-text">
          The goal of Minesweeper is to clear a board containing hidden "mines" without detonating any of them. 
          The player must deduce the location of each mine based on numbers revealed by clicking on adjacent cells.
        </p>

        <h2 className="rules-header">Game Setup</h2>
        <p className="rule-text">
          - The game board is a grid, with each cell either containing a mine or being empty.
          <br />
          - Empty cells contain a number indicating how many mines are adjacent to that cell.
          <br />
          - If you click on a cell with a mine, you lose the game.
          <br />
          - Your goal is to uncover all non-mine cells without triggering any bombs.
        </p>

        <h2 className="rules-header">Winning the Game</h2>
        <p className="rule-text">
          To win, you must uncover all the safe cells. The game ends when either:
          <br />
          - You uncover all the safe cells, or
          <br />
          - You click on a bomb.
        </p>
      </div>
    </div>
  );
};

export default RulesPage;

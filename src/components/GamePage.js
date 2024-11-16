import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GameBoard from './GameBoard';
import Navbar from './Navbar';
import './GamePage.css';

const difficultyLevels = {
  easy: { rows: 8, cols: 8, mines: 10 },
  medium: { rows: 16, cols: 16, mines: 40 },
  hard: { rows: 30, cols: 16, mines: 99 },
};

const generateInitialBoard = (rows, cols, mines) => {
  const board = Array(rows).fill().map(() =>
    Array(cols).fill().map(() => ({
      isOpen: false,
      isMine: false,
      adjacentMines: 0,
    }))
  );

  let placedMines = 0;
  while (placedMines < mines) {
    const row = Math.floor(Math.random() * rows);
    const col = Math.floor(Math.random() * cols);
    if (!board[row][col].isMine) {
      board[row][col].isMine = true;
      placedMines++;
    }
  }

  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],         [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (board[row][col].isMine) continue;

      directions.forEach(([dx, dy]) => {
        const newRow = row + dx;
        const newCol = col + dy;
        if (
          newRow >= 0 && newRow < rows &&
          newCol >= 0 && newCol < cols &&
          board[newRow][newCol].isMine
        ) {
          board[row][col].adjacentMines += 1;
        }
      });
    }
  }

  return board;
};

const Modal = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{message}</h2>
        <button className="modal-close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const GamePage = () => {
  const [difficulty, setDifficulty] = useState('easy');
  const { rows, cols, mines } = difficultyLevels[difficulty];
  const [board, setBoard] = useState(generateInitialBoard(rows, cols, mines));
  const [gameOver, setGameOver] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const resetGame = () => {
    setBoard(generateInitialBoard(rows, cols, mines));
    setGameOver(false);
    setModalMessage('');
    setIsModalOpen(false);
  };

  const handleDifficultyChange = (level) => {
    setDifficulty(level);
    setBoard(generateInitialBoard(difficultyLevels[level].rows, difficultyLevels[level].cols, difficultyLevels[level].mines));
    setGameOver(false);
    setModalMessage('');
    setIsModalOpen(false);
    navigate(`/game/${level}`);
  };

  const checkWin = (newBoard) => {
    const allCellsOpened = newBoard.every(row =>
      row.every(cell => cell.isOpen || cell.isMine)
    );

    if (allCellsOpened) {
      setGameOver(true);
      setModalMessage('Congratulations, You Won!');
      setIsModalOpen(true);
    }
  };

  const handleCellClick = (row, col) => {
    if (gameOver || board[row][col].isOpen) return;
  
    const isFirstClick = board.every(row => row.every(cell => !cell.isOpen));
  
    const newBoard = board.map(row => row.map(cell => ({ ...cell })));
  
    if (isFirstClick) {
      if (newBoard[row][col].isMine) {
        newBoard[row][col].isMine = false;

        let placed = false;
        for (let r = 0; r < rows && !placed; r++) {
          for (let c = 0; c < cols && !placed; c++) {
            if (!newBoard[r][c].isMine && (r !== row || c !== col)) {
              newBoard[r][c].isMine = true;
              placed = true;
            }
          }
        }
  
        const directions = [
          [-1, -1], [-1, 0], [-1, 1],
          [0, -1],         [0, 1],
          [1, -1], [1, 0], [1, 1]
        ];
  
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            if (newBoard[r][c].isMine) {
              newBoard[r][c].adjacentMines = 0;
              continue;
            }

            newBoard[r][c].adjacentMines = 0;
            directions.forEach(([dx, dy]) => {
              const newRow = r + dx;
              const newCol = c + dy;
              if (
                newRow >= 0 && newRow < rows &&
                newCol >= 0 && newCol < cols &&
                newBoard[newRow][newCol].isMine
              ) {
                newBoard[r][c].adjacentMines += 1;
              }
            });
          }
        }
      }
    }
  
    const openCell = (r, c) => {
      if (r < 0 || r >= rows || c < 0 || c >= cols || newBoard[r][c].isOpen) return;
  
      newBoard[r][c].isOpen = true;
  
      if (newBoard[r][c].isMine) {
        setGameOver(true);
        newBoard.forEach(row =>
          row.forEach(cell => {
            if (cell.isMine) cell.isOpen = true;
          })
        );
        setModalMessage('Game Over!');
        setIsModalOpen(true);
      } else if (newBoard[r][c].adjacentMines === 0) {
        const directions = [
          [-1, -1], [-1, 0], [-1, 1],
          [0, -1],         [0, 1],
          [1, -1], [1, 0], [1, 1]
        ];
        directions.forEach(([dx, dy]) => openCell(r + dx, c + dy));
      }
    };
  
    openCell(row, col);
    setBoard(newBoard);
    checkWin(newBoard);
  };  

  return (
    <div className="game-page">
      <Navbar />
      <div className="game-container">
        <div className="game-title">Minesweeper</div>
          <div className='button-container'>
            <button className="buttons" onClick={resetGame}>Reset</button>
            <button onClick={() => handleDifficultyChange('easy')} className="buttons">Easy</button>
            <button onClick={() => handleDifficultyChange('medium')} className="buttons">Medium</button>
            <button onClick={() => handleDifficultyChange('hard')} className="buttons">Hard</button>
          </div>
    </div>
      <GameBoard board={board} onCellClick={handleCellClick} difficulty={difficulty} />
      <Modal isOpen={isModalOpen} message={modalMessage} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default GamePage;

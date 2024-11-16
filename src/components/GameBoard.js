import { Link } from 'react-router-dom';
import Cell from './Cell';
import './GameBoard.css';

const GameBoard = ({ board, onCellClick, difficulty }) => {
  return (
    <div className={`board ${difficulty}`}>
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            cell={cell}
            onClick={() => onCellClick(rowIndex, colIndex)}
          />
        ))
      )}
    </div>
  );
};

export default GameBoard;

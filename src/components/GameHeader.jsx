import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function GameHeader() {
  return (
    <div className="game-header">
      <h1>Minesweeper Game</h1>
      <div className="difficulty-levels">
        <Link to="/game/easy" className="difficulty-link">Easy</Link>
        <Link to="/game/medium" className="difficulty-link">Medium</Link>
        <Link to="/game/hard" className="difficulty-link">Hard</Link>
      </div>
    </div>
  );
}

export default GameHeader;

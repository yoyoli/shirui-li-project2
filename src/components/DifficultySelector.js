import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function DifficultySelector() {
  return (
    <div className="difficulty-selector">
      <div className="back-home">
        <Link to="/" className="back-link">Back to Home</Link>
        <Link to="/rules" className="difficulty-link">Rules</Link>
      </div>

      <h2>Select Difficulty Level</h2>
      <div className="difficulty-levels">
        <Link to="/game/easy" className="difficulty-link">Easy</Link>
        <Link to="/game/medium" className="difficulty-link">Medium</Link>
        <Link to="/game/hard" className="difficulty-link">Hard</Link>
        <button
          onClick={() => window.location.reload()}
          className="difficulty-link"
        >
          Reset
        </button>
      </div>
    </div>

  );
}

export default DifficultySelector;


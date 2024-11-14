import React from 'react';
import '../styles.css';

function Rules() {
  return (
    <div className="rules">
      <h2>Game Rules</h2>
      <p>The goal of Minesweeper is to use logic to find all the empty squares on the board without clicking on a mine.</p>
      <p>Click on a square to reveal it. If it's a bomb, you lose! If it's a number, it indicates how many mines are adjacent to that square.</p>
      <p>Right-click to place a flag where you think there is a mine. Clear all safe squares to win!</p>
    </div>
  );
}

export default Rules;

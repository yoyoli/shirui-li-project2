import React from 'react';
import '../styles.css';

function Cell({ rowIndex, colIndex, isMine, onClick, isRevealed, adjacentBombs, isFlagged, onRightClick, cellSize }) {
  return (
    <div
      className={`grid-cell ${isFlagged ? 'flagged' : ''} ${isRevealed ? (isMine ? 'bomb' : 'safe') : ''}`}
      onClick={onClick}
      onContextMenu={onRightClick}
      style={{
        width: `${cellSize}px`,
        height: `${cellSize}px`,
      }}
    >
      {isFlagged ? '🚩' : isRevealed && !isMine && adjacentBombs > 0 ? adjacentBombs : ''}
    </div>
  );
}

export default Cell;

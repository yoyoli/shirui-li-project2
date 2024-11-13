import React, { useState, useEffect, useCallback } from 'react';
import '../styles.css';

function Grid({ rows, cols, mineCount }) {
  // create grid with useCallback
  const initializeGrid = useCallback(() => {
    const grid = Array(rows)
      .fill()
      .map((_, rowIndex) =>
        Array(cols)
          .fill()
          .map((_, colIndex) => ({
            row: rowIndex,
            col: colIndex,
            isBomb: false,
            isRevealed: false,
            isFlagged: false,
            adjacentBombs: 0,
          }))
      );

    // place bomb
    let minesPlaced = 0;
    while (minesPlaced < mineCount) {
      const row = Math.floor(Math.random() * rows);
      const col = Math.floor(Math.random() * cols);

      if (!grid[row][col].isBomb) {
        grid[row][col].isBomb = true;
        minesPlaced++;
      }
    }

    return grid;
  }, [rows, cols, mineCount]);

  // calculate bomb around
  const calculateAdjacentBombs = (grid) => {
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],         [0, 1],
      [1, -1], [1, 0], [1, 1],
    ];
  
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col].isBomb) continue;
  
        let bombCount = 0;
        directions.forEach(([dRow, dCol]) => {
          const newRow = row + dRow;
          const newCol = col + dCol;
  
          if (
            newRow >= 0 &&
            newRow < grid.length &&
            newCol >= 0 &&
            newCol < grid[row].length &&
            grid[newRow][newCol].isBomb
          ) {
            bombCount++;
          }
        });
  
        grid[row][col].adjacentBombs = bombCount;
      }
    }
  };
  
  const [grid, setGrid] = useState(() => {
    const initialGrid = initializeGrid();
    calculateAdjacentBombs(initialGrid);
    return initialGrid;
  });

  useEffect(() => {
    const newGrid = initializeGrid();
    calculateAdjacentBombs(newGrid);
    setGrid(newGrid);
  }, [initializeGrid]);

  // handle click
  const handleClick = (rowIndex, colIndex) => {
    const newGrid = grid.map(row => row.map(cell => ({ ...cell })));
    const cell = newGrid[rowIndex][colIndex];

    if (cell.isBomb) {
      alert('BOOM! You lost!');
      // reset game
      const resetGrid = initializeGrid();
      calculateAdjacentBombs(resetGrid);
      setGrid(resetGrid);
    } else {
      cell.isRevealed = true;
      setGrid(newGrid);
    }
  };

  // handle right-click to flag a cell
  const handleRightClick = (rowIndex, colIndex, event) => {
    event.preventDefault();
    const newGrid = grid.map(row => row.map(cell => ({ ...cell })));
    const cell = newGrid[rowIndex][colIndex];
    cell.isFlagged = !cell.isFlagged;
    setGrid(newGrid);
  };

  let cellSize;
  if (rows === 8) {
    cellSize = 40; // Easy: 40px
  } else if (rows === 16) {
    cellSize = 25; // Medium: 25px
  } else {
    cellSize = 15; // Hard: 15px
  }

  function Cell({ rowIndex, colIndex, isMine, onClick, isRevealed, adjacentBombs, isFlagged, onRightClick }) {
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

  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
      }}
    >
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              rowIndex={rowIndex}
              colIndex={colIndex}
              isMine={cell.isBomb}
              onClick={() => handleClick(rowIndex, colIndex)}
              onRightClick={(e) => handleRightClick(rowIndex, colIndex, e)}
              isRevealed={cell.isRevealed}
              adjacentBombs={cell.adjacentBombs}
              isFlagged={cell.isFlagged}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;


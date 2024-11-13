import React from 'react';
import '../styles.css';

function Grid({ rows, cols, mineCount }) {
  // create grid
  const grid = Array(rows)
    .fill()
    .map((_, rowIndex) =>
      Array(cols)
        .fill()
        .map((_, colIndex) => ({ row: rowIndex, col: colIndex }))
    );

    let cellSize;
    if (rows === 8) {
        cellSize = 40; // Easy: 40px
    } else if (rows === 16) {
        cellSize = 25; // Medium: 25px
    } else {
        cellSize = 20; // Hard: 20px
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
            <div
              key={`${rowIndex}-${colIndex}`}
              className="grid-cell"
              style={{
                width: `${cellSize}px`,
                height: `${cellSize}px`,
              }}
              onClick={() => alert(`Cell clicked: Row ${cell.row}, Col ${cell.col}`)}
            >
              {/* 暂时不显示内容 */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;


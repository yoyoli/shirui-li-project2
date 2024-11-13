import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Grid from './components/Grid';
import GameHeader from './components/GameHeader';

function App() {
  return (
    <Router>
      <GameHeader />
      <Routes>
        <Route path="/game/easy" element={<Grid rows={8} cols={8} mineCount={10} />} />
        <Route path="/game/medium" element={<Grid rows={16} cols={16} mineCount={40} />} />
        <Route path="/game/hard" element={<Grid rows={30} cols={30} mineCount={99} />} />
        <Route path="/" element={<h2>Welcome to Minesweeper! Please select a difficulty.</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
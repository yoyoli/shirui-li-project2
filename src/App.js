import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Grid from './components/Grid';
import Rules from './components/Rules';
import DifficultySelector from './components/DifficultySelector';

function App() {
  return (
    <Router>
      <div className="App">
        <DifficultySelector />
        <Routes>
          <Route path="/game/easy" element={<Grid rows={8} cols={8} mineCount={10} />} />
          <Route path="/game/medium" element={<Grid rows={16} cols={16} mineCount={40} />} />
          <Route path="/game/hard" element={<Grid rows={30} cols={30} mineCount={99} />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/" element={<h1 className="welcome-title">Welcome to Minesweeper</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
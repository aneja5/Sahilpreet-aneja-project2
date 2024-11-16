import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import RulesPage from './components/RulesPage';
import GamePage from './components/GamePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/game/:difficulty" element={<GamePage />} />
      </Routes>
    </Router>
  );
}

export default App;

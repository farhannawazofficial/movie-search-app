import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound'; // 404 Page
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Define Routes */}
          <Route path="/" element={<Home />} /> {/* Home Page */}
          <Route path="/about" element={<About />} /> {/* About Page */}
          <Route path="/favorites" element={<Favorites />} /> {/* Favorites Page */}
          <Route path="*" element={<NotFound />} /> {/* 404 Page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './SearchBar.css';
import '../App.css'; // Global CSS file


const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <motion.div
      className="search-bar"
      initial={{ scale: 0.9, opacity: 0 }} // Starting state
      animate={{ scale: 1, opacity: 1 }} // Final state
      transition={{ duration: 0.4, ease: "easeOut" }} // Smooth scaling
    >
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <motion.button
        whileHover={{ scale: 1.1 }} // Hover animation
        whileTap={{ scale: 0.9 }}   // Tap animation
        onClick={handleSearch}
      >
        Search
      </motion.button>
    </motion.div>
  );
};

export default SearchBar;

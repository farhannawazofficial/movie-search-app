import React, { useState } from 'react';
import { fetchMovies } from '../api';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (query) => {
    const result = await fetchMovies(query);
    if (result.Error) {
      setError(result.Error);
      setMovies([]);
    } else {
      setError('');
      setMovies(result.Search || []);
    }
  };

  return (
    <div className="home">
      <Header />
      <SearchBar onSearch={handleSearch} />
      {error && <p className="error">{error}</p>}
      <motion.div
        className="movie-list"
        initial={{ opacity: 0 }} // List's starting state
        animate={{ opacity: 1 }} // Final state
        transition={{ duration: 0.5 }} // Animation duration
      >
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </motion.div>
    </div>
  );
};

export default Home;

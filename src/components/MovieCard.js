import React from 'react';
import { motion } from 'framer-motion';
import './MovieCard.css';

const MovieCard = ({ movie }) => (
  <motion.div
    className="movie-card"
    initial={{ opacity: 0, y: 20 }} // Starting state
    animate={{ opacity: 1, y: 0 }} // Final state
    transition={{ duration: 0.5 }} // Animation duration
  >
    <img src={movie.Poster} alt={movie.Title} />
    <h3>{movie.Title}</h3>
    <p>{movie.Year}</p>
  </motion.div>
);

export default MovieCard;

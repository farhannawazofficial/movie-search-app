import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => (
  <motion.header
    className="header"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h1>Movie Search App</h1>
  </motion.header>
);

export default Header;

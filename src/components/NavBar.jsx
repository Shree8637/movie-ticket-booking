// src/components/NavBar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/talkshows">Talk Shows</Link>
        <Link to="/standupcomedy">Stand-Up Comedy</Link>
        <Link to="/aboutus">About Us</Link>
      </div>
    </nav>
  );
};

export default NavBar;

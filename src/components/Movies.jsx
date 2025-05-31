import React from 'react';
import { Link } from 'react-router-dom';
import { movies } from '../data/movies'; // Import your movies data
import './Movies.css'; // Ensure you have Movies.css for styling
import NavBar from './NavBar';

const Movies = () => {
  return (
    <div className="movies">
      <NavBar />
      <h1>Movies Now Showing</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <Link to={`/movies/${movie.id}`}>
              <img src={movie.poster} alt={movie.title} className="movie-poster" />
              <h2>{movie.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;

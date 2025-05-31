import React from 'react';
import { movies, upcomingMovies } from '../data/movies';
import NavBar from './NavBar';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <h1>Welcome to Movie Ticket Booking</h1><hr color='black'/>
      <div className="section">
        <h2>Now Showing</h2>
        <div className="movies-list">
          {movies.map(movie => (
            <div key={movie.id} className="movie-item">
              <img src={movie.poster} alt={movie.title} className="movie-poster" />
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="section">
        <h2>Coming Soon</h2>
        <div className="upcoming-movies-list">
          {upcomingMovies.map(movie => (
            <div key={movie.id} className="movie-item">
              <img src={movie.poster} alt={movie.title} className="movie-poster" />
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

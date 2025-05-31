import React from 'react';
import { Link } from 'react-router-dom';
import standUpComedyShows from '../data/standUpComedyShows';
import './StandUpComedy.css';
import NavBar from './NavBar';

const StandUpComedy = () => {
  return (
    <div className="stand-up-comedy-container">
      <NavBar />
      <h1>Stand-Up Comedy Shows</h1><hr color='black'></hr>
      <div className="stand-up-comedy-list">
        {standUpComedyShows.map((show) => (
          <div key={show.id} className="show-item">
            <img src={show.poster} alt={show.title} />
            <h2>{show.title}</h2>
            <p>{show.description}</p>
            <Link to={`/standupcomedy/${show.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StandUpComedy;

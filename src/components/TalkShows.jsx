import React from 'react';
import { Link } from 'react-router-dom';
import talkShows from '../data/talkShows';
import './TalkShows.css';
import NavBar from './NavBar';

const TalkShows = () => {
  return (
    <div className="talkshows-container">
      <NavBar />
      <h1>Talk Shows</h1>
      <div className="talkshows-list">
        {talkShows.map((show) => (
          <div key={show.id} className="talkshow-item">
            <img src={show.poster} alt={show.title} />
            <h2>{show.title}</h2>
            <p>{show.description}</p>
            <Link to={`/talkshows/${show.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TalkShows;

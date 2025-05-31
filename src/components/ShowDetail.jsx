import React from 'react';
import { useParams } from 'react-router-dom';
import { talkShows } from '../data/talkShows';
import  standUpComedyShows from '../data/standUpComedyShows';
import NavBar from './NavBar';
import './ShowDetail.css';

const ShowDetail = () => {
  const { id } = useParams();
  const show = talkShows.find(show => show.id.toString() === id) || standUpComedyShows.find(show => show.id.toString() === id);

  if (!show) {
    return <p>Show not found</p>;
  }

  return (
    <div className="show-detail-page">
      <NavBar />
      <h1>{show.title}</h1>
      <img src={show.poster} alt={show.title} className="show-poster" />
      <p>{show.description}</p>
      <a href={`/booking/${show.id}`}><button className="book-button">Book Now</button></a>
    </div>
  );
};

export default ShowDetail;

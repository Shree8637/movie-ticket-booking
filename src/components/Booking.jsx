import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { movies } from '../data/movies';
import { talkShows } from '../data/talkShows';
import standUpComedyShows from '../data/standUpComedyShows';
import NavBar from './NavBar';
import './Booking.css';

const Booking = () => {
  const { id } = useParams();
  const event = (movies.find(movie => movie.id.toString() === id) ||
                talkShows.find(show => show.id.toString() === id) ||
                standUpComedyShows.find(show => show.id.toString() === id));

  const [selectedTime, setSelectedTime] = useState('');
  const [seats, setSeats] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleBooking = () => {
    if (selectedTime && seats)
      setSuccessMessage(`Successfully booked ${seats} seats for ${event.title} at ${selectedTime}`);
    else
      alert('Please fill all details ')
  };

  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <div className="booking-page">
      <NavBar />
      <h1>Book Tickets for {event.title}</h1>
      <img src={event.poster} alt={event.title} className="event-poster" />
      <div className="booking-form">
        <label>
          Select Time:
          <select value={selectedTime} onChange={e => setSelectedTime(e.target.value) }>
            <option value="">Select a time</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="7:00 PM">7:00 PM</option>
          </select>
        </label>
        <label>
          Number of Seats:
          <input
            type="number"
            value={seats}
            onChange={e => setSeats(e.target.value)}
            min="1"
          />
        </label>
        <button onClick={handleBooking}>Book Now</button>
      </div>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default Booking;

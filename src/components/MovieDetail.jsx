import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { movies } from '../data/movies';
import './MovieDetail.css'; 

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  const [selectedTime, setSelectedTime] = useState('');
  const [seats, setSeats] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState('');

  if (!movie) return <div>Movie not found</div>;

  const handleTimeChange = (event) => setSelectedTime(event.target.value);
  const handleSeatsChange = (event) => setSeats(event.target.value);
  const handleConfirmBooking = (event) => {
    if (seats && selectedTime)
      setBookingConfirmed(`Successfully booked ${seats} seats for ${event.title} at ${selectedTime}`);
    else alert('Please fill all details ')  
  }

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} className="movie-detail-poster" />
      <p>{movie.description}</p>

      {!bookingConfirmed ? (
        <>
          <h2>Select Time Slot</h2>
          <select value={selectedTime} onChange={handleTimeChange}>
            <option value="">-- Select Time Slot --</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="7:00 PM">7:00 PM</option>
          </select>

          <h2>Number of Seats</h2>
          <input type="number" value={seats} onChange={handleSeatsChange} min="1"/>

          <button onClick={handleConfirmBooking}>Confirm Booking</button>
        </>
      ) : (
        <div className="booking-confirmation">
          <h2>Booking Confirmed</h2>
          <p>Movie: {movie.title}</p>
          <p>Time Slot: {selectedTime}</p>
          <p>Seats: {seats}</p>
          <p>Total Amount: ₹{seats * 200}</p>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;

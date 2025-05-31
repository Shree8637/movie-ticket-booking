import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import standUpComedyShows from '../data/standUpComedyShows';
import './StandUpComedyDetail.css'; 

const StandUpComedyDetail = () => {
  const { id } = useParams();
  const comedyShow = standUpComedyShows.find(show => show.id === parseInt(id));

  const [selectedTime, setSelectedTime] = useState('');
  const [seats, setSeats] = useState(1);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  if (!comedyShow)
    return <div>Stand-Up Comedy Show not found</div>;

  const handleTimeChange = (event) => setSelectedTime(event.target.value);
  const handleSeatsChange = (event) => setSeats(event.target.value);
  const handleConfirmBooking = () => setBookingConfirmed(false);

  return (
    <div className="standupcomedy-detail">
      <h1>{comedyShow.title}</h1>
      <img src={comedyShow.poster} alt={comedyShow.title} className="standupcomedy-detail-poster" />
      <p>{comedyShow.description}</p>

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
          <input type="number" value={seats} onChange={handleSeatsChange} min="1" />

          <button onClick={handleConfirmBooking}>Confirm Booking</button>
        </>
      ) : (
        <div className="booking-confirmation">
          <h2>Booking Confirmed</h2>
          <p>Show: {comedyShow.title}</p>
          <p>Time Slot: {selectedTime}</p>
          <p>Seats: {seats}</p>
          <p>Total Amount: ₹{seats * 250}</p> {/* Assuming ₹250 per seat */}
        </div>
      )}
    </div>
  );
};

export default StandUpComedyDetail;

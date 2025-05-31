import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { talkShows } from '../data/talkShows'; // Import your talk shows data
import './TalkShowDetail.css'; // Ensure you have TalkShowDetail.css for styling

const TalkShowDetail = () => {
  const { id } = useParams();
  const talkShow = talkShows.find((show) => show.id === parseInt(id));

  const [selectedTime, setSelectedTime] = useState('');
  const [seats, setSeats] = useState(1);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  if (!talkShow) return <div>Talk Show not found</div>;

  const handleTimeChange = (event) => setSelectedTime(event.target.value);
  const handleSeatsChange = (event) => setSeats(event.target.value);
  const handleConfirmBooking = () => setBookingConfirmed(true);

  return (
    <div className="talkshow-detail">
      <h1>{talkShow.title}</h1>
      <img src={talkShow.poster} alt={talkShow.title} className="talkshow-detail-poster" />
      <p>{talkShow.description}</p>

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
          <p>Talk Show: {talkShow.title}</p>
          <p>Time Slot: {selectedTime}</p>
          <p>Seats: {seats}</p>
          <p>Total Amount: ₹{seats * 300}</p>
        </div>
      )}
    </div>
  );
};

export default TalkShowDetail;

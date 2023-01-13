import { useState } from 'react';
import './BookingForm.styles.css';

const BookingForm = ({ availableTimes, dispatch }) => {
  const { times } = availableTimes;

  const [bookings, setBookings] = useState({
    date: '',
    time: '17:00',
    guests: '',
    occasion: 'Birthday',
  });

  // SUBMIT HANDLER
  const handleSubmit = e => {
    e.preventDefault();

    console.log(`
    Date: ${bookings.date},
    Time: ${bookings.time},
    Number of Guests: ${bookings.guests},
    Occasion: ${bookings.occasion}`);

    setBookings({
      date: '',
      time: '17:00',
      guests: '',
      occasion: 'Birthday',
    });
  };

  // HANDLING MULTIPLE INPUTS
  const handleChange = e => {
    const { name, value } = e.target;

    // [e.target.name] = e.target.time || e.target.guests || e.target.occasion
    setBookings({ ...bookings, [name]: value });
  };

  return (
    <section name='reservations' className='booking-form'>
      <form className='form-container' onSubmit={handleSubmit}>
        {/* DATE */}
        <label htmlFor='res-date'>Choose date</label>
        <input
          type='date'
          name='date'
          id='res-date'
          value={bookings.date}
          onChange={e => {
            setBookings(prevState => ({ ...prevState, date: e.target.value }));
            dispatch({ type: 'UPDATE_TIMES', date: e.target.value });
          }}
        />

        {/* TIME */}
        <label htmlFor='res-time'>Choose time</label>
        <select
          id='res-time'
          name='time'
          value={bookings.time}
          onChange={handleChange}
        >
          {times.map(time => (
            <option key={time}>{time}</option>
          ))}
        </select>

        {/* NUMBER OF GUESTS */}
        <label htmlFor='guests'>Number of guests</label>
        <input
          type='number'
          placeholder='1'
          min='1'
          max='10'
          id='guests'
          name='guests'
          value={bookings.guests}
          onChange={handleChange}
        />

        {/* TYPE OF OCCASION */}
        <label htmlFor='occasion'>Occasion</label>
        <select
          id='occasion'
          value={bookings.occasion}
          name='occasion'
          onChange={handleChange}
        >
          <option>Birthday</option>
          <option>Engagement</option>
          <option>Anniversary</option>
          <option>Wedding</option>
        </select>

        {/* SUBMIT */}
        <input type='submit' value='Make Your reservation' />
      </form>
    </section>
  );
};

export default BookingForm;

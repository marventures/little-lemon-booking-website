import { useEffect, useState } from 'react';
import './BookingForm.styles.css';
import { submitAPI } from '../../utils/temp';
import { useNavigate } from 'react-router-dom';

// TODO: FORM VALIDATION
const BookingForm = ({ availableTimes, dispatch }) => {
  const navigate = useNavigate();
  const { times } = availableTimes;
  const [bookings, setBookings] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: 'Birthday',
  });

  const [isFormEmpty, setIsFormEmpty] = useState(true);

  useEffect(() => {
    localStorage.setItem('Bookings', JSON.stringify(bookings));
  }, [bookings]);

  // SUBMIT HANDLER
  const handleSubmit = e => {
    e.preventDefault();

    // SUBMIT LOGIC
    if ((bookings.date, bookings.time, bookings.guests !== '')) {
      submitAPI();
      setIsFormEmpty(false);
      navigate('/confirmed');

      console.log(`
      Date: ${bookings.date},
      Time: ${bookings.time},
      Number of Guests: ${bookings.guests},
      Occasion: ${bookings.occasion}`);

      // RESET VALUE TO INITIAL STATE
      setBookings({
        date: '',
        time: '',
        guests: '',
        occasion: 'Birthday',
      });
    } else {
      setIsFormEmpty(true);
      console.log('THERE IS AN ERROR SUBMITTING YOUR FORM');
    }
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
            setBookings({ ...bookings, date: e.target.value });
            // new Date (e.target.value),  date argument on fetchAPI function can access .getDate() and set availableTimes different based on a given Date
            dispatch({ type: 'UPDATE_TIMES', date: new Date(e.target.value) });
          }}
          required={true}
        />

        {/* TIME */}
        <label htmlFor='res-time'>Choose time</label>
        <select
          id='res-time'
          name='time'
          value={bookings.time}
          onChange={handleChange}
          required={true}
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
          required={true}
        />

        {/* TYPE OF OCCASION */}
        <label htmlFor='occasion'>Occasion</label>
        <select
          id='occasion'
          value={bookings.occasion}
          name='occasion'
          onChange={handleChange}
          required={true}
        >
          <option>Birthday</option>
          <option>Engagement</option>
          <option>Anniversary</option>
          <option>Wedding</option>
        </select>

        {/* SUBMIT */}
        <button type='submit'>Make Your reservation</button>
      </form>
    </section>
  );
};

export default BookingForm;

import { useState } from 'react';
import './BookingForm.styles.css';

const BookingForm = ({ availableTimes, setAvailableTimes }) => {
  const [guests, setGuests] = useState('');
  const [occasions, setOccasions] = useState('Birthday');

  // SUBMIT HANDLER
  const handleSubmit = e => {
    e.preventDefault();

    console.log(`
    Date: ${availableTimes.date},
    Time: ${availableTimes.time},
    Number of Guests: ${guests},
    Occasion: ${occasions}`);

    setAvailableTimes({
      date: '',
      time: '17:00',
    });
    setGuests('');
    setOccasions('Birthday');
  };

  // ONCHANGE HANDLER FOR DATE AND TIME
  const handleChange = e => {
    setAvailableTimes({ ...availableTimes, [e.target.name]: e.target.value });
  };

  return (
    <section name='reservations' className='booking-form'>
      <form className='form-container' onSubmit={handleSubmit}>
        {/* DATE */}
        <label htmlFor='res-date'>Choose date</label>
        <input
          type='date'
          id='res-date'
          name='date'
          value={availableTimes.date}
          onChange={handleChange}
        />

        {/* TIME */}
        <label htmlFor='res-time'>Choose time</label>
        <select
          id='res-time'
          name='time'
          value={availableTimes.time}
          onChange={handleChange}
        >
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>

        {/* NUMBER OF GUESTS */}
        <label htmlFor='guests'>Number of guests</label>
        <input
          type='number'
          placeholder='1'
          min='1'
          max='10'
          id='guests'
          value={guests}
          onChange={e => setGuests(e.target.value)}
        />

        {/* TYPE OF OCCASION */}
        <label htmlFor='occasion'>Occasion</label>
        <select
          id='occasion'
          value={occasions}
          onChange={e => setOccasions(e.target.value)}
        >
          <option>Birthday</option>
          <option>Engagement</option>
          <option>Anniversary</option>
          <option>Wedding</option>
        </select>

        {/* SUBMIT INPUT */}
        <input type='submit' value='Make Your reservation' />
      </form>
    </section>
  );
};

export default BookingForm;

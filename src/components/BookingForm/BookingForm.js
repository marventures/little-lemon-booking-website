import { useState } from 'react';
import './BookingForm.styles.css';

const BookingForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('Birthday');
  const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);

  // SUBMIT HANDLER
  const handleSubmit = e => {
    e.preventDefault();

    console.log(`
    Date: ${date},
    Time: ${time},
    Number of Guests: ${guests},
    Occasion: ${occasion}`);

    setGuests('');
    setOccasion('Birthday');
  };

  return (
    <section name='reservations' className='booking-form'>
      <form className='form-container' onSubmit={handleSubmit}>
        {/* DATE */}
        <label htmlFor='res-date'>Choose date</label>
        <input
          type='date'
          id='res-date'
          value={date}
          onChange={e => setDate(e.target.value)}
        />

        {/* TIME */}
        <label htmlFor='res-time'>Choose time</label>
        <select
          id='res-time'
          value={time}
          onChange={e => setTime(e.target.value)}
        >
          {availableTimes.map(time => (
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
          value={guests}
          onChange={e => setGuests(e.target.value)}
        />

        {/* TYPE OF OCCASION */}
        <label htmlFor='occasion'>Occasion</label>
        <select
          id='occasion'
          value={occasion}
          onChange={e => setOccasion(e.target.value)}
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

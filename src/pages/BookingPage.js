import { useState } from 'react';
import BookingForm from '../components/BookingForm/BookingForm';

const BookingPage = () => {
  const [availableTimes, setAvailableTimes] = useState({
    date: '',
    time: '17:00',
  });

  return (
    <>
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
      />
    </>
  );
};

export default BookingPage;

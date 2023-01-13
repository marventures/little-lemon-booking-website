import { useReducer } from 'react';
import BookingForm from '../components/BookingForm/BookingForm';

export const updateTimes = (state, action) => {
  // For now, the function can return the same available times regardless of the date.
  return { ...state };
};

export const initializeTimes = () => {
  return { times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'] };
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </>
  );
};

export default BookingPage;

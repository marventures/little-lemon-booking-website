import HomePage from '../../pages/HomePage';
import BookingPage from '../../pages/BookingPage';
import ConfirmedBookingPage from '../../pages/ConfirmedBookingPage';
import { Routes, Route } from 'react-router-dom';

const Main = () => {
  return (
    <>
      {/* ROUTES */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/bookings' element={<BookingPage />} />
        <Route path='/confirmed' element={<ConfirmedBookingPage />} />
      </Routes>
    </>
  );
};

export default Main;

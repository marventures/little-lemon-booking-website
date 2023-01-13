import HomePage from '../../pages/HomePage';
import BookingPage from '../../pages/BookingPage';
import { Routes, Route } from 'react-router-dom';

const Main = () => {
  return (
    <>
      {/* ROUTES */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/bookings' element={<BookingPage />} />
      </Routes>
    </>
  );
};

export default Main;

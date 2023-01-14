import { useEffect, useState } from 'react';

const ConfirmedBooking = () => {
  const [reservedDetails, setReserveDetails] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('Bookings');
    if (data !== null) setReserveDetails(JSON.parse(data));
  }, []);

  return (
    <>
      <h1>Booking Confirmed!</h1>
      <h2>DATE: {reservedDetails.date}</h2>
      <h3>TIME: {reservedDetails.time}</h3>
      <h3>GUESTS: {reservedDetails.guests}</h3>
      <h3>OCCASION: {reservedDetails.occasion}</h3>
    </>
  );
};

export default ConfirmedBooking;

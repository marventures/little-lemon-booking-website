import './Hero.styles.css';
import restaurantFood from '../../assets/restaurantfood.jpg';
import { Link as LinkR } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='display-container'>
        <h1 className='display-title'>Little Lemon</h1>
        <h3 className='display-subtitle'>Chicago</h3>
        <h4 className='display-text'>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </h4>
        <LinkR to='/bookings' className='reserve-button'>
          Reserve a Table
        </LinkR>
      </div>
      <div className='image-container'>
        <img
          src={restaurantFood}
          alt='restaurant food'
          className='display-image'
        />
      </div>
    </section>
  );
};

export default Hero;

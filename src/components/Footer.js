import React from 'react';
import restaurant from '../assets/restaurant.jpg';

const Footer = () => {
  return (
    <footer name='contact'>
      <nav className='footer-container'>
        <img src={restaurant} className='footer-photo' alt='logo' />
        <ul className='grid-item-nav'>
          <p>Little Lemon</p>
          <li>
            <a href='/home'>Home</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='/menu'>Menu</a>
          </li>
          <li>
            <a href='/reservations'>Reservations</a>
          </li>
          <li>
            <a href='/order'>Order Online</a>
          </li>
          <li>
            <a href='/login'>Login</a>
          </li>
        </ul>

        <ul className='grid-item-contact'>
          <p>Contact</p>
          <address>
            You may also want to visit us:
            <br />
            Little Lemon
            <br />
            331 E Chicago
            <br />
            LaSalle Street Chicago, Illinois 60602
            <br />
            USA
            <li>
              <a href='mailto:jim@rock.com'>jim@rock.com</a>
            </li>
            <li>
              <a href='tel:+13115552368'>(311) 555-2368</a>
            </li>
            <li>
              <a href='mailto:littlemon@bookings.com'>littlemon@bookings.com</a>
            </li>
          </address>
        </ul>

        <ul className='grid-item-socials'>
          <p>Social Media Links</p>
          <li>
            <a href='https://facebook.com' target={'_blank'} rel='noreferrer'>
              Facebook
            </a>
          </li>
          <li>
            <a href='https://instagram.com' target={'_blank'} rel='noreferrer'>
              Instagram
            </a>
          </li>
          <li>
            <a href='https://twitter.com' target={'_blank'} rel='noreferrer'>
              Twitter
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;

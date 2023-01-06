import React from 'react';

const Footer = () => {
  return (
    <footer>
      <nav>
        <img src='./Logo.svg' alt='logo' />
        <ul>
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

        <ul>
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
      </nav>
    </footer>
  );
};

export default Footer;

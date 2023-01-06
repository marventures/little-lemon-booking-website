import React from 'react';

const Nav = () => {
  return (
    <nav>
      <ul>
        <img src='./Logo.svg' alt='logo' />
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
    </nav>
  );
};

export default Nav;

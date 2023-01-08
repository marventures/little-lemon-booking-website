import React from 'react';
import { Link } from 'react-scroll';
import { links } from '../data';

const Nav = () => {
  // NAVLINKS
  const navLinks = links.map(({ link, id }) => {
    return (
      <li key={id}>
        <Link to={link} smooth duration={550}>
          {link}
        </Link>
      </li>
    );
  });

  return (
    <nav>
      <ul className='nav-links-container'>
        <img src='./Logo.svg' alt='logo' />
        {navLinks}
      </ul>
    </nav>
  );
};

export default Nav;

import React from 'react';
import restaurant from '../../assets/restaurant.jpg';
import './Footer.styles.css';
import { links, contacts, socials } from '../../data';
import { Link as LinkS } from 'react-scroll';

const Footer = () => {
  // NAVLINKS
  const navLinks = links.map(({ link, id }) => {
    return (
      <li key={id}>
        <LinkS to={link} smooth duration={550} className='footer-links'>
          {link}
        </LinkS>
      </li>
    );
  });

  //CONTACTS
  const contactLinks = contacts.map(({ link, id, title }) => {
    return (
      <li key={id}>
        <a href={link}>{title}</a>
      </li>
    );
  });

  // SOCIAL LINKS

  const socialLinks = socials.map(({ id, child, link }) => {
    return (
      <li key={id}>
        <a href={link} target={'_blank'} rel='noreferrer'>
          {child}
        </a>
      </li>
    );
  });

  return (
    <footer name='contact'>
      <nav className='footer-container'>
        <img src={restaurant} className='footer-photo' alt='logo' />
        <ul className='grid-item-nav'>
          <p>Little Lemon</p>
          {navLinks}
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
            {contactLinks}
          </address>
        </ul>

        <ul className='grid-item-socials'>
          <p>Social Media</p>
          {socialLinks}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;

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
        <a href={link} className='contact-links'>
          {title}
        </a>
      </li>
    );
  });

  // SOCIAL LINKS

  const socialLinks = socials.map(({ id, child, link }) => {
    return (
      <li key={id}>
        <a
          href={link}
          target={'_blank'}
          rel='noreferrer'
          className='social-links'
        >
          {child}
        </a>
      </li>
    );
  });

  return (
    <footer name='contact'>
      <nav className='footer-container'>
        <div className='footer-photo-container'>
          <img src={restaurant} className='footer-photo' alt='logo' />
        </div>
        <ul className='grid-item-nav'>
          <p className='footer-title'>Little Lemon</p>
          {navLinks}
        </ul>

        <ul className='grid-item-contact'>
          <p className='footer-title'>Contact</p>
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
            <br />
            <br />
            <div className='contacts'>{contactLinks}</div>
          </address>
        </ul>

        <ul className='grid-item-socials'>
          <p className='footer-title'>Social Media</p>
          {socialLinks}
        </ul>
      </nav>

      <p className='copyright'>
        &copy; Copyright {new Date().getFullYear()}{' '}
        <a
          className='linkedin-link'
          target='_blank'
          href='https://www.linkedin.com/in/marventures/'
          rel='noreferrer'
        >
          Marvin M. Pacis
        </a>
        . Don't claim as your own.
      </p>
    </footer>
  );
};

export default Footer;

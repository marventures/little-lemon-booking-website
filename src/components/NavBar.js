import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import { links } from '../data';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkRR } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import BookingPage from '../pages/BookingPage';

const NavBar = () => {
  // STATE FOR HAMBURGER MENU
  const [nav, setNav] = useState(false);

  // onClick HANDLER
  const handleClick = () => {
    if (nav) {
      return setNav(!nav);
    }
  };

  // REF
  const navRef = useRef(null);

  // NAVBAR HIDE/ SHOW ON SCROLL
  useEffect(() => {
    let previousScrollPosition = window.scrollY;
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      const navElement = navRef.current;

      if (!navElement) return;
      if (previousScrollPosition > currentScrollPosition) {
        navElement.style.transform = 'translateY(0)';
        navElement.style.transition = '350ms';
      } else {
        navElement.style.transform = 'translateY(-110px)';
        navElement.style.transition = '800ms';
      }
      previousScrollPosition = currentScrollPosition;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // NAVLINKS
  const navLinks = links.map(({ link, id }) => {
    if (link !== 'reservations') {
      return (
        <li key={id}>
          <Link
            to={link}
            smooth
            duration={550}
            onClick={handleClick}
            className='nav-links'
          >
            {link}
          </Link>
        </li>
      );
    } else {
      return (
        <li key={id}>
          <LinkRR to={`/${link}`} onClick={handleClick} className='nav-links'>
            {link}
          </LinkRR>
        </li>
      );
    }
  });

  return (
    <header>
      <nav ref={navRef} className='nav-container'>
        <img src='./Logo.svg' alt='logo' />
        <ul className='nav-links-container'>{navLinks}</ul>
        {/* HAMBURGER MENU */}
        <div onClick={() => setNav(!nav)}>
          <HiOutlineMenuAlt1
            size={30}
            style={{
              position: 'fixed',
              top: '38',
              right: '10',
            }}
            className={`${nav ? 'hamburger-off' : 'hamburger-on'}`}
          />
        </div>
      </nav>

      <Routes>
        <Route path='/reservations' element={<BookingPage />} />
      </Routes>

      {/* NAV-ITEMS WHEN HAMBURGER MENU IS ON */}
      {nav && (
        <FaTimes
          size={30}
          style={{
            color: 'white',
            position: 'fixed',
            top: '38',
            right: '10',
            zIndex: '99',
            cursor: 'pointer',
          }}
          onClick={() => setNav(!nav)}
        />
      )}
      <div className='parent'>
        <ul className={`${nav ? 'nav-menu active' : 'nav-menu'}`}>
          {navLinks}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;

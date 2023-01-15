import { useState, useRef, useEffect } from 'react';
import { Link as LinkS } from 'react-scroll';
import { links } from '../../data';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';
import './NavBar.styles.css';

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
    return (
      <li key={id}>
        <LinkS
          to={link}
          smooth
          duration={550}
          onClick={handleClick}
          aria-label='On Click'
          className='nav-links'
        >
          {link}
        </LinkS>
      </li>
    );
  });

  return (
    <>
      <header ref={navRef}>
        <nav className='nav-container'>
          <LinkS
            to='hero'
            smooth
            duration={550}
            onClick={handleClick}
            aria-label='On Click'
          >
            <img src='./Logo.svg' alt='logo' className='logo' />
          </LinkS>

          <ul className='nav-links-container'>{navLinks}</ul>
          {/* HAMBURGER MENU */}
          <div onClick={() => setNav(!nav)} aria-label='On Click'>
            <HiOutlineMenuAlt1
              size={30}
              style={{
                position: 'fixed',
                top: '25',
                right: '10',
              }}
              className={`${nav ? 'hamburger-off' : 'hamburger-on'}`}
            />
          </div>
        </nav>
      </header>

      {/* NAV-ITEMS WHEN HAMBURGER MENU IS ON */}
      {nav && (
        <FaTimes
          size={30}
          style={{
            color: '#edefee',
            position: 'fixed',
            top: '38',
            right: '10',
            zIndex: '99',
            cursor: 'pointer',
          }}
          onClick={() => setNav(!nav)}
          aria-label='On Click'
        />
      )}
      <ul className={`${nav ? 'nav-menu active' : 'nav-menu'}`}>{navLinks}</ul>
    </>
  );
};

export default NavBar;

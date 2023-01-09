import { useState } from 'react';
import { Link } from 'react-scroll';
import { links } from '../data';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';

const NavBar = () => {
  // STATE FOR HAMBURGER MENU
  const [nav, setNav] = useState(false);

  // onClick HANDLER
  const handleClick = () => {
    if (nav) {
      return setNav(!nav);
    }
  };

  // NAVLINKS
  const navLinks = links.map(({ link, id }) => {
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
  });

  return (
    <header>
      <nav className='nav-container'>
        <img src='./Logo.svg' alt='logo' />
        <ul className='nav-links-container'>{navLinks}</ul>
        {/* HAMBURGER MENU */}
        <div onClick={() => setNav(!nav)} className='hamburger'>
          <HiOutlineMenuAlt1
            size={30}
            style={{
              position: 'fixed',
              top: '38',
              right: '10',
            }}
          />
        </div>
      </nav>

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

import { useState } from 'react';
import { Link } from 'react-scroll';
import { links } from '../data';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';

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
    </header>
  );
};

export default NavBar;

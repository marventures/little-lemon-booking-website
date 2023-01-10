//SOCIAL ICONS
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

// LINKS FOR NAVBAR
export const links = [
  {
    id: 1,
    link: 'about',
  },
  {
    id: 2,
    link: 'menu',
  },
  {
    id: 3,
    link: 'testimonials',
  },
  {
    id: 4,
    link: 'contact',
  },
];

// FOOTER CONTACT

export const contacts = [
  {
    id: 1,
    link: 'mailto:jim@rock.com',
    title: 'jim@rock.com',
  },
  {
    id: 2,
    link: 'tel:+13115552368',
    title: '(311) 555-2368',
  },
  {
    id: 3,
    link: 'mailto:littlemon@bookings.com',
    title: 'littlemon@bookings.com',
  },
];

// FOOTER SOCIAL LINKS
export const socials = [
  {
    id: 1,
    child: <FaFacebook size={30} />,
    link: 'https://facebook.com',
  },
  {
    id: 2,
    child: <FaInstagram size={30} />,
    link: 'https://instagram.com/',
  },
  {
    id: 4,
    child: <FaTwitter size={30} />,
    link: 'https://twitter.com/',
  },
];

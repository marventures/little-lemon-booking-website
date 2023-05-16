# Restaurant Table Booking System

A table-booking system using React. It's a fully responsive web app that allows users to reserve a table for the Little Lemon restaurant. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot

![restaurantBookingSystem](https://user-images.githubusercontent.com/108392678/212535689-5cc6ef5c-b4d4-413f-9cf6-873a17562cc7.jpg)
![restaurantBookingSystem](https://user-images.githubusercontent.com/108392678/212537315-e0cd8592-a3f3-48b9-bae7-784107307581.jpg)


### Links

- Live : [Demo](https://little-lemon-booking-website.vercel.app/)

## My process

### Built with

- [React](https://beta.reactjs.org/) - React 
- [React Router v6+](https://reactrouter.com/en/main) - For routes
- [React Scroll](https://www.npmjs.com/package/react-scroll) - For smooth scroll
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - For unit testing
- CSS Flexbox and Grid
- Semantic HTML
- Open Graph Protocol

### What I learned

- Hide/show navbar depending on scroll direction
- Creating a form component in React
- Creating a controlled component in React
- Creating routes using React Router v6
- Creating unit tests using React Testing Library
- Storing state using localStorage API
- Using aria attributes to ensure my application is accessible to users
- Handling form submission and validation
- Managing state within a component using UseState Hook
- Handling side-effects using useEffect Hook
- Creating a basic list component using map function
- Using keys within list Components
- Lifting state up
- Styling React App with Pure CSS
- Adding Open Graph Protocol meta tags to improve SEO

Here is a code snippet: 

```jsx
const BookingForm = ({ availableTimes, dispatch }) => {
  const navigate = useNavigate();
  const { times } = availableTimes;
  const [bookings, setBookings] = useState({
    date: '',
    time: '17:00',
    guests: '',
    occasion: 'Birthday',
  });

  useEffect(() => {
    localStorage.setItem('Bookings', JSON.stringify(bookings));
  }, [bookings]);
```

### Useful resources

- [React Docs (Rendering Lists) ](https://reactnative.dev/docs/stylesheet) - This helped me for rendering lists in the navbar. I really liked their documentation and will use it going forward.  
- [React Testing Library ](https://testing-library.com/docs/react-testing-library/intro/) - This helped me for creating unit tests in React.
- [React Router (useNavigate)](https://reactrouter.com/en/6.5.0/hooks/use-navigate) - This helped me for redirecting user to a confirmed booking page.
## Author

- Website - [Marvin Morales Pacis](https://marvin-morales-pacis.vercel.app/)
- LinkedIn - [@marventures](https://www.linkedin.com/in/marventures/)
- Twitter - [@marventures11](https://www.twitter.com/marventures11)

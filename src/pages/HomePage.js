import NavBar from '../components/NavBar/NavBar';
import Hero from '../components/Hero/Hero';
import Specials from '../components/Specials/Specials';
import Testimonials from '../components/Testimonials/Testimonials';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;

import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import NavBar from '../components/NavBar/NavBar';
import Specials from '../components/Specials/Specials';
import Testimonials from '../components/Testimonials/Testimonials';

const HomePage = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </main>
  );
};

export default HomePage;

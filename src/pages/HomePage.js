import Hero from '../components/Hero';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

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

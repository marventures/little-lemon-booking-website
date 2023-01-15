import './About.styles.css';
import MarioAdrianA from '../../assets/about/MarioAdrianA.jpg';
import MarioAdrianB from '../../assets/about/MarioAdrianB.jpg';

const About = () => {
  return (
    <section name='about' className='about'>
      <div className='about-container'>
        <h1 className='about-title'>Little Lemon</h1>
        <h2 className='about-subtitle'>Chicago</h2>
        <p className='about-text'>
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who
          moved to the United States to pursue their shared dream of owning a
          restaurant. <br />
          <br />
          To craft the menu, Mario relies on family recipes and his experience
          as a chef in Italy. Adrian does all the marketing for the restaurant
          and led the effort to expand the menu beyond classic Italian to
          incorporate additional cuisines from the Mediterranean region.
        </p>
      </div>
      <div className='about-image-container'>
        <div className='about-container-one'>
          <img
            src={MarioAdrianA}
            alt='Mario and Adrian 1'
            className='about-image-one'
          />
        </div>
        <div className='about-container-two'>
          <img
            src={MarioAdrianB}
            alt='Mario and Adrian 2'
            className='about-image-two'
          />
        </div>
      </div>
    </section>
  );
};

export default About;

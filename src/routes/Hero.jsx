import Slider from '../components/Slider';
import AboutUs from '../components/AboutUs';
import Cards from '../components/Cards';

const Hero = () => {
  const slides = [
    { image: '/pic1.avif' },
    { image: '/pic2.avif' },
    { image: '/pic3.avif' }
  ];

  return ( <>
    <section className="hero">
      <Slider slides={slides} />
    </section>
    <AboutUs/>
    <Cards/>
    </>
  );
};

export default Hero;

// src/pages/Home.jsx
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import PaintQuality from '../components/home/PaintQuality';  // Naya section
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import ColorInspiration from '../components/home/ColorInspiration';
import AnimatedSection from '../components/home/AnimatedSection';  // Naya
import BrandFeatures from '../components/home/BrandFeatures';      // Naya
import CTABanner from '../components/home/CTABanner';              // Naya

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <AnimatedSection />        {/* Naya - Image with Animation */}
      <PaintQuality />        {/* Categories ki jagah PaintQuality */}
      <BrandFeatures />          {/* Naya - Brand Features Grid */}
      <WhyChooseUs />
      <Testimonials />
      <ColorInspiration />
      <CTABanner />              {/* Naya - Call to Action */}
    </>
  );
};

export default Home;
import { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutCards from '../components/home/AboutCards';
import StateExplorer from '../components/home/StateExplorer';
import FeaturedDestinations from '../components/home/FeaturedDestinations';
import HiddenGems from '../components/home/HiddenGems';
import TravelPlanning from '../components/home/TravelPlanning';
import SafetyBanner from '../components/home/SafetyBanner';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  useEffect(() => {
    document.title = "Explore India Smartly | Ultimate Travel Guide";
  }, []);

  return (
    <div className="bg-brand-navy min-h-screen">
      <HeroSection />
      
      {/* Needs negative margin to overlap the hero wave divider */}
      <div className="relative z-20 w-full">
        <AboutCards />
      </div>
      
      <StateExplorer />
      <FeaturedDestinations />
      <HiddenGems />
      <TravelPlanning />
      <SafetyBanner />
      <Testimonials />
    </div>
  );
};

export default Home;

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Compass, Lightbulb, Map, Shield } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';

const About = () => {
  useEffect(() => {
    document.title = "About Us | Explore India Smartly";
  }, []);

  return (
    <div className="bg-brand-navy min-h-screen pt-24 pb-20">
      
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Compass className="w-20 h-20 text-brand-cyan mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
            Redefining Travel in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-500">India</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed font-light">
            We believe exploring India shouldn't be chaotic. Explore India Smartly is your premium, intelligent travel companion designed to bring structure, luxury, and safety to your journey.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto glass-card rounded-[40px] p-8 md:p-16 relative z-10 bg-gradient-to-br from-white/10 to-transparent border border-white/20">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-cyan/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="Our Mission" centered={false} />
              <div className="space-y-6 text-gray-300 text-lg">
                <p>
                  India is vast, diverse, and sometimes overwhelming. Our mission is to curate the ultimate travel experience that combines the viral destinations everyone wants to see with the hidden gems nobody knows about.
                </p>
                <p>
                  By integrating smart budget estimation, verified safety protocols, and premium itineraries, we aim to elevate the standard of domestic tourism.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&fit=crop" 
                alt="Kerala Travel" 
                className="rounded-3xl shadow-2xl rotate-3"
              />
              <img 
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=400&fit=crop" 
                alt="Traveler" 
                className="absolute -bottom-10 -left-10 w-48 h-48 lg:w-64 lg:h-64 rounded-3xl shadow-2xl -rotate-6 border-4 border-brand-navy object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="glass-card p-10 rounded-3xl">
            <div className="w-16 h-16 mx-auto bg-brand-cyan/20 rounded-2xl flex items-center justify-center mb-6">
              <Lightbulb className="w-8 h-8 text-brand-cyan" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Smart Curation</h3>
            <p className="text-gray-400 leading-relaxed">We filter out the noise and present you with high-quality, verified travel experiences.</p>
          </div>
          <div className="glass-card p-10 rounded-3xl">
            <div className="w-16 h-16 mx-auto bg-brand-orange/20 rounded-2xl flex items-center justify-center mb-6">
              <Map className="w-8 h-8 text-brand-orange" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Complete Coverage</h3>
            <p className="text-gray-400 leading-relaxed">From all 28 states to 8 Union Territories, our database is comprehensive and unbiased.</p>
          </div>
          <div className="glass-card p-10 rounded-3xl">
            <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Traveler Safety First</h3>
            <p className="text-gray-400 leading-relaxed">Your well-being is our priority, equipped with scam alerts and emergency resources.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;

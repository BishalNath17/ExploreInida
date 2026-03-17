import { useEffect } from 'react';
import HiddenGemsComponent from '../components/home/HiddenGems';
import { motion } from 'framer-motion';

const HiddenGems = () => {
  useEffect(() => {
    document.title = "Hidden Gems | Explore India Smartly";
  }, []);

  return (
    <div className="bg-brand-navy min-h-screen pt-24 pb-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center"
      >
        <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-brand-cyan text-sm mb-4">Off Beat Paths</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">India's Best Kept <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-ocean">Secrets</span></h1>
      </motion.div>

      {/* Reusing the component from the homepage which already has the full list and filters built in */}
      <HiddenGemsComponent />
    </div>
  );
};

export default HiddenGems;

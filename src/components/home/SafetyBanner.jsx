import { ShieldAlert, AlertTriangle, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SafetyBanner = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-brand-navy to-brand-ocean/10 px-4 sm:px-6 lg:px-8 border-y border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex items-center gap-6 w-full md:w-2/3">
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ repeat: Infinity, duration: 4 }}
            className="w-16 h-16 rounded-full glass-card hidden sm:flex shrink-0 items-center justify-center border-brand-orange/50"
          >
            <ShieldAlert className="w-8 h-8 text-brand-orange" />
          </motion.div>
          
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Travel Safely with Us</h2>
            <p className="text-gray-300 text-sm md:text-base">
              Learn about common local scams, safety advisories, and access state-wise emergency contacts to ensure your trip is secure.
            </p>
          </div>
        </div>

        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4 shrink-0">
          <Link to="/safety" className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl backdrop-blur-md border border-white/20 transition-all text-sm font-semibold">
            <AlertTriangle className="w-4 h-4 text-yellow-400" />
            Scam Alerts
          </Link>
          <Link to="/safety" className="flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange hover:bg-orange-500 text-white rounded-xl transition-all text-sm font-semibold shadow-lg">
            <HelpCircle className="w-4 h-4" />
            Emergency Info
          </Link>
        </div>

      </div>
    </section>
  );
};

export default SafetyBanner;


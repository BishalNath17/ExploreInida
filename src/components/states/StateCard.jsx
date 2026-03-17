import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getImageErrorHandler } from '../../utils/imageUtils';
import { stateHeroImages } from '../../data/heroImages';

const StateCard = ({ state, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
    >
      <Link 
        to={`/states/${state.code}`}
        className="block group relative h-[300px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300"
      >
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          {/* Using placeholder image since real data will be added later */}
          <img 
            src={stateHeroImages[state.code] || `https://images.unsplash.com/photo-1590050752117-238cb12bc4cc?q=80&w=400&h=300&fit=crop`} 
            alt={state.state} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
            loading="lazy"
            onError={getImageErrorHandler('hero')}
          />
        </div>
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-white mb-1">{state.state}</h3>
          <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-1 mb-3">
            {state.tagline}
          </p>
          
          <div className="flex items-center gap-2 text-brand-cyan text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
            <span>Explore</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default StateCard;

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import { hiddenGemsData } from '../../data/hiddenGemsData';

const HiddenGems = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Mountain', 'Waterfall', 'Beach', 'Spiritual', 'Historical', 'Adventure'];

  const filteredGems = activeFilter === 'All' 
    ? hiddenGemsData 
    : hiddenGemsData.filter(gem => gem.type === activeFilter);

  return (
    <section className="py-20 bg-brand-navy px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Hidden Gems Explorer" 
          subtitle="Escape the crowds and discover India's best-kept secrets."
        />

        {/* Filters - Scrollable organically on mobile */}
        <div className="flex overflow-x-auto pb-4 mb-8 pt-2 scrollbar-none gap-3 justify-start lg:justify-center">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-brand-cyan text-brand-navy shadow-[0_0_15px_rgba(6,182,212,0.4)]' 
                  : 'glass-card hover:bg-white/10 text-gray-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <AnimatePresence>
            {filteredGems.map((gem) => (
              <motion.div
                key={gem.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/states/${gem.stateCode}`} className="block glass-card rounded-2xl overflow-hidden group cursor-pointer">
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={gem.image} 
                      alt={gem.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-brand-navy/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-brand-cyan">
                      {gem.type}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">{gem.name}</h3>
                      <span className="text-xs text-gray-400 bg-white/5 py-1 px-2 rounded-md">{gem.state}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                      {gem.description}
                    </p>
                    <span className="text-brand-cyan text-sm font-semibold hover:underline">
                      Explore state &rarr;
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default HiddenGems;

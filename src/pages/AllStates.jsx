import { useState, useEffect } from 'react';
import StateCard from '../components/states/StateCard';
import FilterBar from '../components/common/FilterBar';
import { statesData } from '../data/statesData';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const UT_CODES = new Set(['IN-AN', 'IN-CH', 'IN-DH', 'IN-DL', 'IN-JK', 'IN-LA', 'IN-LD', 'IN-PY']);

const AllStates = () => {
  useEffect(() => {
    document.title = "Explore All States & Union Territories | Explore India Smartly";
  }, []);

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const applyFilters = (list) =>
    list.filter(state => {
      const matchesSearch = state.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            state.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'all' ||
                              state.destinations.some(d => d.category === activeCategory) ||
                              (state.hiddenGems || []).some(g => typeof g === 'object' ? g.category === activeCategory : false);
      return matchesSearch && matchesCategory;
    });

  const states28 = statesData.filter(s => !UT_CODES.has(s.code));
  const uts8 = statesData.filter(s => UT_CODES.has(s.code));

  const filteredStates = applyFilters(states28);
  const filteredUTs = applyFilters(uts8);

  const noResults = filteredStates.length === 0 && filteredUTs.length === 0;

  return (
    <div className="bg-brand-navy min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Explore <span className="text-brand-cyan">India</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
            From the majestic snow-capped peaks of the Himalayas to the serene backwaters of the South — discover the vibrant cultures, hidden gems, and breathtaking landscapes of every Indian state and union territory.
          </p>

          <div className="max-w-xl mx-auto relative mb-6">
            <input 
              type="text" 
              placeholder="Search by name or tagline..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-brand-navy border border-white/20 rounded-full pl-12 pr-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all shadow-lg"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-cyan w-5 h-5" />
          </div>
        </motion.div>

        <FilterBar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

        {noResults ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No results found matching your filters.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-4 text-brand-cyan hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <>
            {/* ── 28 States ── */}
            {filteredStates.length > 0 && (
              <section className="mb-16">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-2xl md:text-3xl font-bold text-white mb-8"
                >
                  <span className="text-brand-cyan">28</span> States
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredStates.map((state, index) => (
                    <StateCard key={state.code} state={state} index={index} />
                  ))}
                </div>
              </section>
            )}

            {/* ── 8 Union Territories ── */}
            {filteredUTs.length > 0 && (
              <section className="mb-20">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-2xl md:text-3xl font-bold text-white mb-8"
                >
                  <span className="text-brand-orange">8</span> Union Territories
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredUTs.map((ut, index) => (
                    <StateCard key={ut.code} state={ut} index={index} />
                  ))}
                </div>
              </section>
            )}
          </>
        )}

      </div>
    </div>
  );
};

export default AllStates;

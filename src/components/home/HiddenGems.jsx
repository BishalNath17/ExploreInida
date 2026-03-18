import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import { statesData } from '../../data/statesData';
import { stateHeroImages } from '../../data/heroImages';
import LazyImage from '../LazyImage';

/**
 * Curated list of hidden gems for the homepage.
 * Looked up dynamically from statesData.js to ensure single source of truth.
 */
const HIDDEN_GEMS_PICKS = [
  { destName: 'Ziro Valley', stateCode: 'IN-AR', type: 'Valley' },
  { destName: 'Majuli Island', stateCode: 'IN-AS', type: 'River Island' },
  { destName: 'Gandikota', stateCode: 'IN-AP', type: 'Canyon' },
  { destName: 'Spiti Valley', stateCode: 'IN-HP', type: 'Desert Mountain' },
];

/* Look up each hidden gem from the single source of truth */
const gems = HIDDEN_GEMS_PICKS.map(pick => {
  const state = statesData.find(s => s.code === pick.stateCode);
  
  // Try to find it in hiddenGems first, then destinations
  let gemSource = null;
  let isFromDestinations = false;

  if (state?.hiddenGems) {
    gemSource = state.hiddenGems.find(g => {
      const gName = typeof g === 'string' ? g : g.name;
      return gName.toLowerCase().includes(pick.destName.toLowerCase()) || 
             pick.destName.toLowerCase().includes(gName.toLowerCase());
    });
  }

  if (!gemSource && state?.destinations) {
    gemSource = state.destinations.find(d => 
      d.name.toLowerCase().includes(pick.destName.toLowerCase()) ||
      pick.destName.toLowerCase().includes(d.name.toLowerCase())
    );
    isFromDestinations = true;
  }

  const gemName = gemSource ? (typeof gemSource === 'string' ? gemSource : gemSource.name) : pick.destName;
  const gemLocation = gemSource?.location ? `${gemSource.location}, ${state?.state || ''}` : (state?.state || '');
  const gemDesc = gemSource?._whySpecial || gemSource?.whySpecial || `A stunning hidden treasure nestled in ${gemLocation}.`;
  
  // Image priority: specific image -> state hero image -> fallback
  const gemImage = gemSource?.image || stateHeroImages[pick.stateCode] || '';

  return {
    id: pick.destName.toLowerCase().replace(/\s+/g, '-'),
    name: gemName,
    location: gemLocation,
    type: pick.type,
    description: gemDesc,
    image: gemImage,
    stateCode: pick.stateCode
  };
});

const HiddenGems = () => {
  return (
    <section className="py-20 bg-brand-navy px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading 
          title="Off the Beaten Path" 
          subtitle="Escape the crowds and discover India's best-kept secrets — untouched and extraordinary."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
          {gems.map((gem, index) => (
            <Link to={`/states/${gem.stateCode}`} key={gem.id} className="group">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-6 bg-white/[0.02] border border-white/5 rounded-3xl p-4 hover:bg-white/[0.04] hover:border-brand-cyan/30 transition-all duration-300"
              >
                {/* Image Section */}
                <div className="w-full sm:w-2/5 aspect-[4/3] sm:aspect-auto sm:h-[200px] rounded-2xl overflow-hidden shrink-0 relative">
                  <div className="absolute inset-0 bg-brand-cyan/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                  <LazyImage
                    src={gem.image}
                    alt={gem.name}
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 right-3 sm:hidden z-20">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full backdrop-blur-md">
                      {gem.type}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-center py-2 sm:pr-4">
                  <div className="hidden sm:inline-block mb-3 w-fit">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full">
                      {gem.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors duration-300">
                    {gem.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wide">
                    {gem.location}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                    {gem.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiddenGems;

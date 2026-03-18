import { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, IndianRupee, Utensils, ArrowLeft, Shield, Map } from 'lucide-react';
import { statesData } from '../data/statesData';
import { stateHeroImages } from '../data/heroImages';
import SectionHeading from '../components/common/SectionHeading';
import FilterBar, { getCategoryStyles, CATEGORIES } from '../components/common/FilterBar';
import InteractiveMap from '../components/common/InteractiveMap';
import DestinationCard from '../components/DestinationCard';
import { stateCoordinates, destinationCoordinates } from '../data/coordinates';
import { getImageErrorHandler } from '../utils/imageUtils';

/* ── Dest/Image Getters ── */
const getDestinationImage = (dest) => {
  if (dest.image) return dest.image;
  // Generic fallback if image is missing from data
  return `https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800&h=600`;
};

const getDescription = (dest) => {
  if (dest._whySpecial) return dest._whySpecial;
  if (dest.whySpecial) return dest.whySpecial;
  return `A breathtaking ${dest.category || 'spot'} in ${dest.location || 'this region'}. Add this to your itinerary to experience the true essence of ${dest.name}.`;
};

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&h=600&fit=crop';

const StateDetail = () => {
  const { code } = useParams();
  const state = statesData.find(s => s.code === code);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    if (state) {
      document.title = `${state.state} Travel Guide | Explore India Smartly`;
    }
    // Scroll to top on navigation to ensure clean view
    window.scrollTo(0, 0);
  }, [state, code]);

  if (!state) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center bg-brand-navy">
        <h2 className="text-3xl text-white font-bold mb-4">State/Destination Not Found</h2>
        <p className="text-gray-400 mb-6 max-w-md text-center">We couldn't find the location you're looking for. It might have been moved or removed.</p>
        <Link to="/states" className="px-6 py-3 bg-brand-cyan hover:bg-cyan-500 text-brand-navy font-bold rounded-xl transition-colors">Return to All Destinations</Link>
      </div>
    );
  }

  // Convert hidden gems (strings OR objects) into destination-like entries
  const hiddenGemEntries = (state.hiddenGems || []).map(gem => {
    if (typeof gem === 'string') {
      return { name: gem, location: state.state, category: 'hiddenGem' };
    }
    return { ...gem, category: 'hiddenGem', _whySpecial: gem.whySpecial };
  });

  // Deduplicate: skip hidden gem entries whose name already exists in destinations
  const existingNames = new Set(state.destinations.map(d => d.name.toLowerCase()));
  const uniqueGems = hiddenGemEntries.filter(g => !existingNames.has(g.name.toLowerCase()));

  const allSpots = [...state.destinations, ...uniqueGems];


  const filteredDestinations = activeCategory === 'all' 
    ? allSpots 
    : allSpots.filter(d => d.category === activeCategory);

  return (
    <div className="bg-brand-navy min-h-screen pb-20">
      {/* ── Cinematic Hero Banner ── */}
      <div className="relative h-[60vh] min-h-[500px] w-full">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={stateHeroImages[state.code] || `https://images.unsplash.com/photo-1590050752117-238cb12bc4cc?q=80&w=1600&h=900&fit=crop`} 
            alt={state.state} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>
        </div>
        
        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16">
          <Link to="/states" className="flex items-center text-gray-300 hover:text-white mb-6 w-fit transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to States
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            {state.state}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-brand-cyan font-medium"
          >
            {state.tagline}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        
        {/* ── Quick Info Bar ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-cyan/20 flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6 text-brand-cyan" />
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider">Best Time</p>
              <p className="text-white font-medium text-sm mt-1">{state.bestTime}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center shrink-0">
              <IndianRupee className="w-6 h-6 text-brand-orange" />
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider">Budget/Day</p>
              <p className="text-white font-medium text-sm mt-1">{state.budget}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 col-span-2">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
              <Utensils className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider">Must Try Local Food</p>
              <p className="text-white font-medium text-sm mt-1">{state.localFood.join(', ')}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            
            {/* ── Destinations Filter & Cards ── */}
            <section>
              <SectionHeading title="Destinations & Hidden Gems" centered={false} />
              
              <FilterBar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

              {filteredDestinations.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {filteredDestinations.map((dest, idx) => {
                    const desc = getDescription(dest);
                    const imgSrc = getDestinationImage(dest);
                    
                    const destinationProps = {
                      ...dest,
                      description: desc,
                      image: imgSrc
                    };

                    return (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: (idx % 4) * 0.08 }}
                        key={`${dest.name}-${idx}`}
                        className="h-full"
                      >
                        <DestinationCard destination={destinationProps} />
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                <div className="glass-card rounded-xl p-8 text-center mt-6">
                  <p className="text-gray-400">No destinations found for "{CATEGORIES.find(c => c.id === activeCategory)?.label}" in {state.state}.</p>
                  <button 
                    onClick={() => setActiveCategory('all')}
                    className="mt-4 text-brand-cyan hover:underline"
                  >
                    View all destinations
                  </button>
                </div>
              )}
            </section>

          </div>

          <div className="space-y-8">
            {/* ── Interactive Map ── */}
            <div className="glass-dark rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Map className="w-6 h-6 text-brand-cyan" />
                <h3 className="text-xl font-bold text-white">Map View</h3>
              </div>
              <MapSection state={state} />
            </div>

            {/* ── Safety Tips Sidebar ── */}
            <div className="glass-dark rounded-2xl p-6 border-brand-orange/40">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-brand-orange" />
                <h3 className="text-xl font-bold text-white">Safety Tips</h3>
              </div>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex gap-2"><span className="text-brand-orange">•</span> Keep emergency numbers handy for {state.state}.</li>
                <li className="flex gap-2"><span className="text-brand-orange">•</span> Dress modestly when visiting spiritual and rural areas.</li>
                <li className="flex gap-2"><span className="text-brand-orange">•</span> Always use official tourist guides approved by the state tourism board.</li>
              </ul>
            </div>

            {/* ── Budget Planner CTA ── */}
            <div className="glass-card rounded-2xl p-6 bg-gradient-to-br from-brand-cyan/20 to-transparent">
              <h3 className="text-xl font-bold text-white mb-2">Need a custom plan?</h3>
              <p className="text-gray-300 text-sm mb-6">Use our smart budget planner to generate a day-by-day itinerary tailored to your budget.</p>
              <Link to="/budget-planner" className="block w-full text-center bg-brand-cyan hover:bg-cyan-500 text-brand-navy font-bold py-3 rounded-xl transition-colors shadow-[0_4px_14px_0_rgba(6,182,212,0.39)] hover:shadow-[0_6px_20px_rgba(6,182,212,0.23)]">
                Plan Full Trip
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

/* ── Map Section sub-component ── */
const MapSection = ({ state }) => {
  const markers = useMemo(() => {
    const items = [];
    const stateCenter = stateCoordinates[state.code];

    (state.destinations || []).forEach(dest => {
      const coords = destinationCoordinates[dest.name];
      if (coords) {
        items.push({
          lat: coords.lat,
          lng: coords.lng,
          name: dest.name,
          location: dest.location,
          category: dest.category,
          isGem: false,
        });
      }
    });

    (state.hiddenGems || []).forEach(gem => {
      const gemName = typeof gem === 'string' ? gem : gem.name;
      const coords = destinationCoordinates[gemName];
      if (coords) {
        items.push({
          lat: coords.lat,
          lng: coords.lng,
          name: gemName,
          location: state.state,
          category: 'hidden gem',
          isGem: true,
        });
      }
    });

    // If no destination markers found, at least use state center
    if (items.length === 0 && stateCenter) {
      items.push({
        lat: stateCenter.lat,
        lng: stateCenter.lng,
        name: state.state,
        location: state.tagline,
        category: 'state',
        isGem: false,
      });
    }

    return items;
  }, [state]);

  const stateCenter = stateCoordinates[state.code] || { lat: 20.5937, lng: 78.9629 };

  return (
    <InteractiveMap
      markers={markers}
      center={[stateCenter.lat, stateCenter.lng]}
      zoom={7}
      height="350px"
    />
  );
};

export default StateDetail;

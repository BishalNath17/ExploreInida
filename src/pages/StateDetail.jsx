import { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, IndianRupee, Utensils, ArrowLeft, Shield, Map } from 'lucide-react';
import { statesData } from '../data/statesData';
import { stateHeroImages } from '../data/heroImages';
import SectionHeading from '../components/common/SectionHeading';
import FilterBar, { getCategoryStyles, CATEGORIES } from '../components/common/FilterBar';
import InteractiveMap from '../components/common/InteractiveMap';
import { stateCoordinates, destinationCoordinates } from '../data/coordinates';
import { getImageErrorHandler } from '../utils/imageUtils';

/* ── Category-based Unsplash image pools ── */
const CATEGORY_IMAGES = {
  temple: [
    'photo-1585135497273-1a86d9d9b7f0', 'photo-1621621973895-988c1a0f3964',
    'photo-1590766740554-d6f7e887bb3e', 'photo-1609766418204-94aae3e0ee44',
    'photo-1564769610726-59cead6a6f7f', 'photo-1605540436563-5b39f5a4dc19',
    'photo-1600093112560-705a11c9cbc2', 'photo-1613467663831-55ee9e6b0a5c',
    'photo-1587303616517-4ef8c8a40d36', 'photo-1580810459233-e5a1e2cbb7be'
  ],
  historical: [
    'photo-1548013146-72479768bada', 'photo-1524492412937-b28074a5d7da',
    'photo-1564507592333-c60657eea523', 'photo-1599661046289-e31897846e41',
    'photo-1587474260584-136574528ed5', 'photo-1585136917228-f3023e088acc',
    'photo-1605540436563-5b39f5a4dc19', 'photo-1566378246598-5b11a0d486cc',
    'photo-1609766418204-94aae3e0ee44', 'photo-1590050752117-238cb12bc4cc'
  ],
  wildlife: [
    'photo-1615824996195-f780bba7cfab', 'photo-1535338454528-1b5a28f8ddab',
    'photo-1549366021-9f761d450615', 'photo-1504173010664-32509aeebb62',
    'photo-1474511320723-9a56873571b7', 'photo-1456926631375-92c8ce872def',
    'photo-1507149833265-60c372daea22', 'photo-1544985361-b420d7a77043',
    'photo-1564760055775-d63b17a55c44', 'photo-1518709766631-a6a7f45921c3'
  ],
  nature: [
    'photo-1506905925346-21bda4d32df4', 'photo-1470071459604-3b5ec3a7fe05',
    'photo-1501854140801-50d01698950b', 'photo-1470770841497-7b3200c67fd7',
    'photo-1465146344425-f00d5f5c8f07', 'photo-1433086966358-54859d0ed716',
    'photo-1586348943529-beaae6c28db9', 'photo-1510797215324-95aa89f43c33',
    'photo-1559329007-40df8a9345d8', 'photo-1563299796-17596ed6b017'
  ],
  beach: [
    'photo-1507525428034-b723cf961d3e', 'photo-1519046904884-53103b34b206',
    'photo-1476673160081-cf065bc4e32c', 'photo-1473116763249-2faaef81ccda',
    'photo-1590523277543-a94d2e4eb00b', 'photo-1544551763-46a013bb70d5',
    'photo-1468413253725-0d5181091126', 'photo-1505228395891-9a51e7e86bf6',
    'photo-1506953823645-5991f7bec891', 'photo-1510414842594-a61c69b5ae57'
  ],
  hillstation: [
    'photo-1455156218388-5e61b526818b', 'photo-1464822759023-fed622ff2c3b',
    'photo-1486870591958-9b9d0d1dda99', 'photo-1519681393784-d120267933ba',
    'photo-1454496522488-7a8e488e8606', 'photo-1464278533981-50106e6176b1',
    'photo-1486911278844-a81c5fa6a1cd', 'photo-1502786129293-79981df4e689',
    'photo-1444065381814-865dc9da92c0', 'photo-1476842634003-7dcca8f832de'
  ],
  cultural: [
    'photo-1567157577867-05ccb1388e13', 'photo-1590766740554-d6f7e887bb3e',
    'photo-1532664189809-02133fee698d', 'photo-1582510003544-4d00b7f74220',
    'photo-1544620347-c4fd4a3d5957', 'photo-1526711657229-e7e080ed7aa1',
    'photo-1561361058-c24cecae35ca', 'photo-1566378246598-5b11a0d486cc',
    'photo-1596402184320-417e7178b2cd', 'photo-1555400038-63f5ba517a47'
  ],
  adventure: [
    'photo-1533692328991-08159ff19fca', 'photo-1551632811-561732d1e306',
    'photo-1504280390367-361c6d9f38f4', 'photo-1530541930197-dc137a6e48de',
    'photo-1486911278844-a81c5fa6a1cd', 'photo-1522163182402-834f871fd851',
    'photo-1501555088652-021faa106b9b', 'photo-1527004013197-933c4bb611b3',
    'photo-1502581827344-ebe63dd8e440', 'photo-1530541930197-dc137a6e48de'
  ],
  hiddenGem: [
    'photo-1500534623283-312aade485b7', 'photo-1469474968028-56623f02e42e',
    'photo-1509316975850-ff9c5deb0cd9', 'photo-1476514525535-07fb3b4ae5f1',
    'photo-1472396961693-142e6e269027', 'photo-1431794062232-2a99a5431c6c',
    'photo-1518173946687-a43e8e25a71f', 'photo-1447752875215-b2761acb3c5d',
    'photo-1500049242364-5f500807cdd7', 'photo-1523712999610-f77fbcfc3843'
  ]
};

/* ── Category-keyed description templates ── */
const CATEGORY_DESCRIPTIONS = {
  temple: (name, loc) => `A revered spiritual landmark in ${loc?.split(',')[0]}, ${name} draws pilgrims and travelers seeking blessings and architectural grandeur.`,
  historical: (name, loc) => `Step back in time at ${name} — a storied monument in ${loc?.split(',')[0]} that echoes with centuries of heritage and fascinating tales.`,
  wildlife: (name, loc) => `Home to rare and majestic species, ${name} in ${loc?.split(',')[0]} offers thrilling safaris and close encounters with nature's finest.`,
  nature: (name, loc) => `Immerse yourself in the breathtaking natural beauty of ${name}, nestled in ${loc?.split(',')[0]} — a paradise for photographers and peace seekers.`,
  beach: (name, loc) => `Sun-kissed shores and turquoise waters await you at ${name} in ${loc?.split(',')[0]} — perfect for relaxation and coastal adventures.`,
  hillstation: (name, loc) => `Escape to the cool, misty heights of ${name} in ${loc?.split(',')[0]}, where panoramic views and serene trails rejuvenate the soul.`,
  cultural: (name, loc) => `Discover the vibrant traditions and living heritage of ${name} in ${loc?.split(',')[0]} — a cultural experience you won't forget.`,
  adventure: (name, loc) => `Feel the adrenaline rush at ${name} in ${loc?.split(',')[0]}, offering world-class adventure activities amidst stunning landscapes.`,
  hiddenGem: (name) => `A hidden gem waiting to be discovered — ${name} offers an untouched, off-the-beaten-path experience far from the tourist crowds.`
};

/* ── Deterministic image picker ── */
const getDestinationImage = (dest, idx) => {
  // If destination has a specific unique image, use it!
  if (dest.image) return dest.image;

  // Use a hash of the name to deterministically pick an image so re-renders don't change the image
  const nameHash = dest.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const pool = CATEGORY_IMAGES[dest.category] || CATEGORY_IMAGES.nature;
  // Combine index and hash to avoid adjacent dupes but maintain stability
  const photoId = pool[(nameHash + idx) % pool.length];
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&q=80&w=800&h=600`;
};

const getDescription = (dest) => {
  if (dest._whySpecial) return dest._whySpecial;
  const fn = CATEGORY_DESCRIPTIONS[dest.category] || CATEGORY_DESCRIPTIONS.nature;
  return fn(dest.name, dest.location || 'this state');
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
            onError={getImageErrorHandler('hero')}
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
                    const categoryLabel = CATEGORIES.find(c => c.id === dest.category)?.label || dest.category;
                    const badgeClass = getCategoryStyles(dest.category);
                    const imgSrc = getDestinationImage(dest, idx);
                    const desc = getDescription(dest);

                    return (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: (idx % 4) * 0.08 }}
                        key={`${dest.name}-${idx}`}
                        className="rounded-2xl overflow-hidden bg-white/[0.06] border border-white/10 group hover:border-brand-cyan/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300"
                      >
                        {/* ── Card Image ── */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={imgSrc}
                            alt={dest.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            loading="lazy"
                            onError={getImageErrorHandler('state', dest.category)}
                          />
                          {/* Gradient overlay for readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                          {/* Category badge floating on the image */}
                          <span className={`absolute top-3 right-3 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider backdrop-blur-md border ${badgeClass}`}>
                            {categoryLabel}
                          </span>
                        </div>

                        {/* ── Card Body ── */}
                        <div className="p-5 space-y-3">
                          <h4 className="text-white font-bold text-lg leading-tight group-hover:text-brand-cyan transition-colors duration-300">
                            {dest.name}
                          </h4>

                          <div className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                            <span className="text-gray-400 text-sm">{dest.location}</span>
                          </div>

                          <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-2">
                            {desc}
                          </p>
                        </div>
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

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import { statesData } from '../../data/statesData';
import { stateHeroImages } from '../../data/heroImages';
import { MapPin, Star } from 'lucide-react';
import LazyImage from '../LazyImage';

/**
 * Curated list of featured destinations.
 * Images are pulled from statesData at runtime — edit statesData.js to update them.
 */
const FEATURED_PICKS = [
  { destName: 'Taj Mahal', stateCode: 'IN-UP', rating: 4.9 },
  { destName: 'Pangong Tso Lake', stateCode: 'IN-LA', rating: 4.8 },
  { destName: 'Hampi', stateCode: 'IN-KA', rating: 4.7 },
  { destName: 'Alappuzha Backwaters', stateCode: 'IN-KL', rating: 4.8 },
  { destName: 'Varanasi Ghats', stateCode: 'IN-UP', rating: 4.8 },
  { destName: 'Hawa Mahal', stateCode: 'IN-RJ', rating: 4.7 },
];

/* Look up each featured destination from the single source of truth */
const destinations = FEATURED_PICKS.map(pick => {
  const state = statesData.find(s => s.code === pick.stateCode);
  const dest = state?.destinations?.find(d =>
    d.name.toLowerCase().includes(pick.destName.toLowerCase()) ||
    pick.destName.toLowerCase().includes(d.name.toLowerCase())
  );
  return {
    id: pick.destName.toLowerCase().replace(/\s+/g, '-'),
    name: dest?.name || pick.destName,
    location: dest?.location ? `${dest.location}, ${state?.state || ''}` : (state?.state || ''),
    stateCode: pick.stateCode,
    image: dest?.image || stateHeroImages[pick.stateCode] || '',
    rating: pick.rating,
  };
});

const FeaturedDestinations = () => {
  return (
    <section className="py-20 bg-[#0b1120] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading 
          title="Viral Destinations" 
          subtitle="The most Instagrammed and breathtaking spots you must visit at least once in your life."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {destinations.map((dest, index) => (
            <Link to={`/states/${dest.stateCode}`} key={dest.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer shadow-2xl hover:shadow-brand-cyan/10 transition-shadow duration-500"
              >
                {/* Image */}
                <LazyImage 
                  src={dest.image} 
                  alt={`${dest.name} — ${dest.location}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                {/* Rating badge */}
                <div className="absolute top-5 right-5 glass-dark px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-md">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-white text-sm font-semibold">{dest.rating}</span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-7 lg:p-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 transform group-hover:-translate-y-1 transition-transform duration-300">
                    {dest.name}
                  </h3>
                  <div className="flex items-center gap-2 text-brand-cyan transform group-hover:-translate-y-1 transition-transform duration-300 delay-75">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span className="text-base font-medium">{dest.location}</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;

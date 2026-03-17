import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import { destinationsData } from '../../data/destinationsData';
import { MapPin, Star } from 'lucide-react';

const FeaturedDestinations = () => {
  return (
    <section className="py-20 bg-[#0b1120] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading 
          title="Viral Destinations" 
          subtitle="The most Instagrammed and breathtaking spots you must visit at least once in your life."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {destinationsData.map((dest, index) => (
            <Link to={`/states/${dest.stateCode}`} key={dest.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl"
              >
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent"></div>
                
                <div className="absolute top-6 right-6 glass-dark px-3 py-1.5 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-white text-sm font-semibold">{dest.rating}</span>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 lg:p-10">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2 transform group-hover:-translate-y-2 transition-transform duration-300">{dest.name}</h3>
                  <div className="flex items-center gap-2 text-brand-cyan transform group-hover:-translate-y-2 transition-transform duration-300 delay-75">
                    <MapPin className="w-5 h-5" />
                    <span className="text-lg font-medium">{dest.location}</span>
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

import { Calculator, Calendar, Tent, Users, IndianRupee } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import { motion } from 'framer-motion';

const TravelPlanning = () => {
  const tripTypes = [
    { icon: <Users className="w-5 h-5" />, name: "Family Trip" },
    { icon: <Tent className="w-5 h-5" />, name: "Adventure" },
    { icon: <Calendar className="w-5 h-5" />, name: "Weekend Getaway" }
  ];

  return (
    <section className="py-20 relative bg-[#0b1120] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side Content */}
        <div className="w-full lg:w-1/2">
          <SectionHeading 
            title="Plan Your Journey Smartly" 
            subtitle="Take the guesswork out of travel. Let our smart budget planner and itinerary guides help you organize the perfect trip."
            centered={false}
          />

          <ul className="space-y-6 mt-8">
            <li className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center shrink-0">
                <Calculator className="w-6 h-6 text-brand-cyan" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Budget Estimator</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Calculate exact costs for hotels, food, transport and activities based on your travel style.</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center shrink-0">
                <IndianRupee className="w-6 h-6 text-brand-orange" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Tailored Stays</h4>
                <p className="text-gray-400 text-sm leading-relaxed">From luxurious resorts to budget-friendly hostels and homestays, find what fits your pocket.</p>
              </div>
            </li>
          </ul>

          <Link to="/budget-planner" className="inline-block mt-10 px-8 py-4 bg-brand-cyan hover:bg-cyan-500 text-brand-navy rounded-full font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:-translate-y-1">
            Try Budget Planner
          </Link>
        </div>

        {/* Right Side Cards Preview */}
        <div className="w-full lg:w-1/2 relative h-[400px]">
          {/* Main Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute top-0 right-4 lg:right-10 w-[80%] md:w-[60%] lg:w-[80%] glass-card p-6 rounded-2xl z-20 bg-brand-navy/80"
          >
            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
              <div>
                <h4 className="text-white font-bold">Goa Weekly Budget</h4>
                <p className="text-xs text-brand-cyan mt-1">Mid-Range Traveler</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-white">₹25,000</span>
                <p className="text-xs text-gray-400">Total Est.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300">Stay</span>
                  <span className="text-white">₹12,000</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-brand-cyan h-2 rounded-full w-[48%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300">Food</span>
                  <span className="text-white">₹7,000</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-brand-orange h-2 rounded-full w-[28%]"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Type Tags Floating Behind */}
          <motion.div 
            initial={{ opacity: 0, x: -30, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute bottom-10 left-0 lg:-left-10 w-[60%] glass-dark p-6 rounded-2xl z-10"
          >
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Trip Types</h4>
            <div className="flex flex-wrap gap-2">
              {tripTypes.map((type, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 px-3 py-2 rounded-md flex items-center gap-2 text-xs text-gray-300">
                  {type.icon}
                  {type.name}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TravelPlanning;

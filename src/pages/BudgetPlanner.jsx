import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, MapPin, Users, Calendar, Coins } from 'lucide-react';
import { statesData } from '../data/statesData';
import SectionHeading from '../components/common/SectionHeading';

const BudgetPlanner = () => {
  useEffect(() => {
    document.title = "Smart Budget Planner | Explore India Smartly";
  }, []);

  const [destination, setDestination] = useState('');
  const [days, setDays] = useState(3);
  const [travelers, setTravelers] = useState(2);
  const [style, setStyle] = useState('Mid-Range');
  const [result, setResult] = useState(null);

  const calculateBudget = (e) => {
    e.preventDefault();
    if (!destination) return;

    const stateInfo = statesData.find(s => s.state === destination);
    if (!stateInfo) return;

    // Parse base budget e.g., "₹1,500 - ₹3,500 per day"
    const budgetStr = stateInfo.budget;
    const matches = budgetStr.match(/\d+(,\d+)?/g);
    
    let baseBudget = 2500; // default fallback
    if (matches && matches.length >= 2) {
      const min = parseInt(matches[0].replace(/,/g, ''));
      const max = parseInt(matches[1].replace(/,/g, ''));
      baseBudget = (min + max) / 2;
    }

    // Adjust based on style
    let multiplier = 1;
    if (style === 'Budget (Backpacker)') multiplier = 0.6;
    if (style === 'Luxury') multiplier = 2.5;

    const costPerPersonPerDay = baseBudget * multiplier;
    const totalCost = costPerPersonPerDay * travelers * days;

    setResult({
      total: Math.round(totalCost),
      perPerson: Math.round(costPerPersonPerDay * days),
      daily: Math.round(costPerPersonPerDay * travelers),
      breakdown: {
        stay: Math.round(totalCost * 0.45),
        food: Math.round(totalCost * 0.25),
        travel: Math.round(totalCost * 0.20),
        activities: Math.round(totalCost * 0.10)
      }
    });
  };

  return (
    <div className="bg-brand-navy min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Smart Budget Planner" 
          subtitle="Get an instant estimate for your trip based on real-time data from travelers across India."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-16">
          
          {/* Form Section */}
          <div className="lg:col-span-5 glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Calculator className="text-brand-cyan" />
              Trip Details
            </h3>

            <form onSubmit={calculateBudget} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-cyan" /> Select Destination
                </label>
                <select 
                  required
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-brand-navy border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all"
                >
                  <option value="" disabled>Choose a State or UT</option>
                  {statesData.map(state => (
                    <option key={state.code} value={state.state}>{state.state}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-cyan" /> Days
                  </label>
                  <input 
                    type="number" 
                    min="1" max="30"
                    value={days}
                    onChange={(e) => setDays(parseInt(e.target.value) || 1)}
                    className="w-full bg-brand-navy border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-brand-cyan" /> Travelers
                  </label>
                  <input 
                    type="number" 
                    min="1" max="20"
                    value={travelers}
                    onChange={(e) => setTravelers(parseInt(e.target.value) || 1)}
                    className="w-full bg-brand-navy border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                  <Coins className="w-4 h-4 text-brand-cyan" /> Travel Style
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['Budget (Backpacker)', 'Mid-Range', 'Luxury'].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setStyle(type)}
                      className={`py-2 px-1 text-xs font-semibold rounded-lg transition-all border ${
                        style === type 
                          ? 'bg-brand-cyan text-brand-navy border-brand-cyan shadow-lg' 
                          : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                      }`}
                    >
                      {type.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-brand-orange hover:bg-orange-500 text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:-translate-y-1 mt-4"
              >
                Calculate Estimate
              </button>
            </form>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-7">
            {result ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full glass-card p-8 rounded-3xl relative overflow-hidden"
              >
                {/* Decorative blob */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/20 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/3"></div>

                <div className="relative z-10 text-center mb-10">
                  <h3 className="text-xl text-gray-300 font-medium mb-2">Estimated Total Cost</h3>
                  <div className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
                    ₹{result.total.toLocaleString()}
                  </div>
                  <p className="text-brand-cyan font-semibold">
                    For {travelers} traveler{travelers > 1 ? 's' : ''} • {days} days in {destination}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  <div className="bg-brand-navy/60 backdrop-blur-md rounded-2xl p-4 text-center border border-white/5 hover:border-brand-orange/40 transition-colors">
                    <p className="text-gray-400 text-xs uppercase mb-1">Accommodation</p>
                    <p className="text-white font-bold text-xl">₹{result.breakdown.stay.toLocaleString()}</p>
                    <p className="text-brand-orange text-xs mt-1">45%</p>
                  </div>
                  <div className="bg-brand-navy/60 backdrop-blur-md rounded-2xl p-4 text-center border border-white/5 hover:border-brand-cyan/40 transition-colors">
                    <p className="text-gray-400 text-xs uppercase mb-1">Food</p>
                    <p className="text-white font-bold text-xl">₹{result.breakdown.food.toLocaleString()}</p>
                    <p className="text-brand-cyan text-xs mt-1">25%</p>
                  </div>
                  <div className="bg-brand-navy/60 backdrop-blur-md rounded-2xl p-4 text-center border border-white/5 hover:border-purple-400/40 transition-colors">
                    <p className="text-gray-400 text-xs uppercase mb-1">Travel (Local)</p>
                    <p className="text-white font-bold text-xl">₹{result.breakdown.travel.toLocaleString()}</p>
                    <p className="text-purple-400 text-xs mt-1">20%</p>
                  </div>
                  <div className="bg-brand-navy/60 backdrop-blur-md rounded-2xl p-4 text-center border border-white/5 hover:border-yellow-400/40 transition-colors">
                    <p className="text-gray-400 text-xs uppercase mb-1">Activities</p>
                    <p className="text-white font-bold text-xl">₹{result.breakdown.activities.toLocaleString()}</p>
                    <p className="text-yellow-400 text-xs mt-1">10%</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center border-t border-white/10 pt-8">
                  <div className="text-center sm:text-left pr-0 sm:pr-8 sm:border-r border-white/10">
                    <p className="text-gray-400 text-sm mb-1">Per Person Total</p>
                    <p className="text-white font-bold text-2xl">₹{result.perPerson.toLocaleString()}</p>
                  </div>
                  <div className="text-center sm:text-left pl-0 sm:pl-4">
                    <p className="text-gray-400 text-sm mb-1">Daily Budget (Group)</p>
                    <p className="text-white font-bold text-2xl">₹{result.daily.toLocaleString()}</p>
                  </div>
                </div>

              </motion.div>
            ) : (
              <div className="h-full glass-card p-8 rounded-3xl flex flex-col items-center justify-center text-center opacity-70 min-h-[400px]">
                <Calculator className="w-16 h-16 text-gray-500 mb-4" />
                <h3 className="text-xl text-white font-semibold mb-2">Awaiting Details</h3>
                <p className="text-gray-400 max-w-sm">
                  Fill in your destination, travel duration, group size, and preferred travel style to see a detailed, instant estimation.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default BudgetPlanner;

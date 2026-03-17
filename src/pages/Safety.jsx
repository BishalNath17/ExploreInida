import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { safetyTips } from '../data/safetyTips';
import SectionHeading from '../components/common/SectionHeading';

const Safety = () => {
  useEffect(() => {
    document.title = "Safety & Emergency | Explore India Smartly";
  }, []);

  return (
    <div className="bg-brand-navy min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto border-b border-white/10 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-sm font-semibold mb-6 tracking-wide">
            Your Safety is Priority
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Travel Securely <br/>Everywhere</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            India is beautiful and welcoming, but like any destination, being prepared ensures a smooth journey. Here are essential tips and emergency contacts to keep you safe.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {safetyTips.map((category, idx) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass-card p-8 rounded-3xl relative overflow-hidden ${
                category.id === 'emergency' ? 'border shadow-[0_0_30px_rgba(249,115,22,0.1)] border-brand-orange/30' : ''
              }`}
            >
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                  category.id === 'emergency' ? 'bg-red-500/20' : 'glass-dark'
                }`}>
                  <category.icon className={`w-6 h-6 ${category.id === 'emergency' ? 'text-red-400' : 'text-brand-cyan'}`} />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <ul className="space-y-4 relative z-10">
                {category.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className={`text-xl leading-none ${category.id === 'emergency' ? 'text-red-400' : 'text-brand-cyan'}`}>•</span>
                    <span className="text-gray-300 font-medium">{tip}</span>
                  </li>
                ))}
              </ul>
              
              {/* Decorative background element */}
              <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
                <category.icon className="w-64 h-64 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Help Banner */}
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
        <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Need Immediate Help during Travel?</h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto relative z-10">
          The Government of India provides a dedicated 24x7 toll-free multi-lingual tourist helpline.
        </p>
        <div className="inline-block bg-white text-red-600 font-black text-4xl py-4 px-10 rounded-2xl shadow-xl relative z-10">
          1363
        </div>
        <p className="text-white/80 text-sm mt-4 relative z-10">Or dial 1800-11-1363</p>
      </div>

    </div>
  );
};

export default Safety;

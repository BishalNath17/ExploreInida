import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import WaveDivider from '../layout/WaveDivider';
import SearchBar from '../common/SearchBar';

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Taj_Mahal_in_March_2004.jpg/1920px-Taj_Mahal_in_March_2004.jpg" 
          alt="Taj Mahal in India" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/80 via-brand-navy/60 to-brand-navy/90"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-cyan font-medium text-sm mb-6 tracking-wide uppercase">
            The Ultimate Travel Guide
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Explore India <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-ocean">Smartly</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8 font-light leading-relaxed">
            Discover famous destinations, hidden gems, budget stays, safety tips, and smarter travel across every Indian state.
          </p>

          {/* ── Search Bar ── */}
          <div className="mb-8">
            <SearchBar variant="hero" />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/states" 
              className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-orange-500 text-white rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:-translate-y-1 text-center"
            >
              Explore All States
            </Link>
            <Link 
              to="/hidden-gems" 
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold transition-all hover:-translate-y-1 text-center"
            >
              Hidden Places
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Image Elements - visible only on large screens */}
      <motion.div 
        animate={{ y: [0, -15, 0] }} 
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="hidden lg:block absolute top-[25%] left-[5%] glass-card p-2 rounded-xl rotate-[-6deg]"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Pangong_lake%2C_ladakh.jpg/800px-Pangong_lake%2C_ladakh.jpg" alt="Pangong Lake" className="w-[200px] h-[150px] object-cover rounded-lg" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0] }} 
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
        className="hidden lg:block absolute bottom-[15%] right-[5%] glass-card p-2 rounded-xl flex-col items-center rotate-[4deg]"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Kerala_-_Gods_own_Country.jpg/800px-Kerala_-_Gods_own_Country.jpg" alt="Kerala Backwaters" className="w-[200px] h-[150px] object-cover rounded-lg" />
      </motion.div>

      <WaveDivider />
    </section>
  );
};

export default HeroSection;

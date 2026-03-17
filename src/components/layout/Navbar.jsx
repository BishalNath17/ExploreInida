import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Explore States', path: '/states' },
    { name: 'Hidden Gems', path: '/hidden-gems' },
    { name: 'Budget Planner', path: '/budget-planner' },
    { name: 'Safety', path: '/safety' },
    { name: 'Contact', path: '/contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-dark py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Compass className="w-8 h-8 text-brand-cyan group-hover:rotate-45 transition-transform duration-500" />
            <span className="text-xl md:text-2xl font-bold tracking-tight text-white flex flex-col md:flex-row md:gap-1">
              Explore India <span className="text-brand-cyan md:text-white font-medium">Smartly</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-sm lg:text-base font-medium transition-colors duration-200 hover:text-brand-cyan ${
                  location.pathname === link.path ? 'text-brand-cyan' : 'text-gray-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-brand-cyan focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-brand-navy/95 backdrop-blur-xl z-40 md:hidden pt-24 px-6"
          >
            <div className="flex flex-col gap-6 items-center w-full">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-2xl font-semibold transition-colors duration-200 ${
                    location.pathname === link.path ? 'text-brand-cyan' : 'text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="w-full h-px bg-white/20 my-6"></div>
              
              <div className="flex gap-4">
                {/* Social placeholders for mobile menu */}
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white cursor-pointer hover:bg-brand-cyan transition-colors">
                  IG
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white cursor-pointer hover:bg-brand-cyan transition-colors">
                  FB
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

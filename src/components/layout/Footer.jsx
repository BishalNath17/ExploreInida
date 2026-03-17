import { Link } from 'react-router-dom';
import { Compass, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2 group">
              <Compass className="w-6 h-6 text-brand-cyan" />
              <span className="text-xl font-bold tracking-tight text-white">
                Explore India Smartly
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mt-2">
              Discover famous destinations, hidden gems, budget stays, safety tips, and smarter travel across every Indian state. Experience the ultimate luxury travel guide.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-brand-cyan transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-cyan transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-cyan transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-cyan transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-lg mb-2">Explore</h3>
            <Link to="/states" className="text-gray-400 text-sm hover:text-brand-cyan transition-colors w-fit">All States & UTs</Link>
            <Link to="/hidden-gems" className="text-gray-400 text-sm hover:text-brand-cyan transition-colors w-fit">Hidden Gems</Link>
            <Link to="/budget-planner" className="text-gray-400 text-sm hover:text-brand-cyan transition-colors w-fit">Budget Planner</Link>
            <Link to="/safety" className="text-gray-400 text-sm hover:text-brand-cyan transition-colors w-fit">Safety & Emergency</Link>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-lg mb-2">Company</h3>
            <Link to="/about" className="text-gray-400 text-sm hover:text-brand-cyan transition-colors w-fit">About Us</Link>
            <Link to="/contact" className="text-gray-400 text-sm hover:text-brand-cyan transition-colors w-fit">Contact Us</Link>
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-brand-cyan transition-colors w-fit">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-brand-cyan transition-colors w-fit">Terms of Service</Link>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-lg mb-2">Contact Info</h3>
            <div className="flex items-start gap-3 text-gray-400 text-sm">
              <MapPin className="w-5 h-5 text-brand-cyan shrink-0" />
              <span>Connaught Place, New Delhi, India 110001</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <Phone className="w-5 h-5 text-brand-cyan shrink-0" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <Mail className="w-5 h-5 text-brand-cyan shrink-0" />
              <span>hello@exploreindiasmartly.com</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {currentYear} Explore India Smartly. All rights reserved.
          </p>
          <div className="flex gap-2 text-gray-500 text-sm">
            <span>Made with ❤️ for incredible India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

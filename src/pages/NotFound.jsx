import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound = () => {
  useEffect(() => {
    document.title = "404 Not Found | Explore India Smartly";
  }, []);

  return (
    <div className="min-h-screen bg-brand-navy flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-card p-12 rounded-3xl max-w-lg w-full text-center relative overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-cyan/10 blur-[80px] rounded-full"></div>
        
        <AlertCircle className="w-24 h-24 text-brand-cyan mx-auto mb-6" />
        <h1 className="text-6xl font-bold text-white mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-200 mb-6">Destination Not Found</h2>
        
        <p className="text-gray-400 mb-10 leading-relaxed">
          It looks like you've ventured off the map. The page you are looking for doesn't exist or has been moved.
        </p>

        <Link 
          to="/" 
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange hover:bg-orange-500 text-white rounded-full font-bold transition-all shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:-translate-y-1"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Homepage
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;

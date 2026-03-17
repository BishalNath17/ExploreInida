import { useState, useRef, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, MapPin, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Fuse from 'fuse.js';
import { statesData } from '../../data/statesData';
import { stateHeroImages } from '../../data/heroImages';

/* ── Build a flat search index of all states + destinations ── */
const buildSearchIndex = () => {
  const items = [];

  statesData.forEach(state => {
    // Add the state itself
    items.push({
      type: 'state',
      name: state.state,
      subtitle: state.tagline,
      code: state.code,
      image: stateHeroImages[state.code] || 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=200&h=150&fit=crop',
    });

    // Add each destination under that state
    (state.destinations || []).forEach(dest => {
      items.push({
        type: 'destination',
        name: dest.name,
        subtitle: `${dest.location} · ${state.state}`,
        code: state.code,
        category: dest.category,
        image: stateHeroImages[state.code] || 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=200&h=150&fit=crop',
      });
    });

    // Add hidden gems
    (state.hiddenGems || []).forEach(gem => {
      const gemName = typeof gem === 'string' ? gem : gem.name;
      items.push({
        type: 'hidden-gem',
        name: gemName,
        subtitle: `Hidden Gem · ${state.state}`,
        code: state.code,
        image: stateHeroImages[state.code] || 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=200&h=150&fit=crop',
      });
    });
  });

  return items;
};

const SearchBar = ({ variant = 'hero' }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const searchIndex = useMemo(() => buildSearchIndex(), []);

  const fuse = useMemo(() => new Fuse(searchIndex, {
    keys: ['name', 'subtitle'],
    threshold: 0.35,
    distance: 100,
    minMatchCharLength: 2,
  }), [searchIndex]);

  const results = useMemo(() => {
    if (query.trim().length < 2) return [];
    return fuse.search(query).slice(0, 8).map(r => r.item);
  }, [query, fuse]);

  useEffect(() => {
    setSelectedIndex(-1);
  }, [results]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target) &&
          inputRef.current && !inputRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSelect = (item) => {
    navigate(`/states/${item.code}`);
    setQuery('');
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      handleSelect(results[selectedIndex]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case 'state': return <Compass className="w-4 h-4 text-brand-cyan" />;
      case 'destination': return <MapPin className="w-4 h-4 text-brand-orange" />;
      case 'hidden-gem': return <MapPin className="w-4 h-4 text-green-400" />;
      default: return <Search className="w-4 h-4 text-gray-400" />;
    }
  };

  const getBadge = (type) => {
    switch (type) {
      case 'state': return <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-cyan/20 text-brand-cyan uppercase font-bold tracking-wider">State</span>;
      case 'destination': return <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-orange/20 text-brand-orange uppercase font-bold tracking-wider">Place</span>;
      case 'hidden-gem': return <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 uppercase font-bold tracking-wider">Gem</span>;
      default: return null;
    }
  };

  const isHero = variant === 'hero';

  return (
    <div className={`relative ${isHero ? 'w-full max-w-2xl mx-auto' : 'w-full max-w-md'}`}>
      <div className={`relative flex items-center ${isHero
        ? 'bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl hover:border-brand-cyan/40 transition-all duration-300'
        : 'bg-white/10 backdrop-blur-md border border-white/15 rounded-xl'
      }`}>
        <Search className={`absolute left-4 text-brand-cyan ${isHero ? 'w-5 h-5' : 'w-4 h-4'}`} />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setIsOpen(true); }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={isHero ? 'Search any state, city or destination...' : 'Search places...'}
          className={`w-full bg-transparent text-white placeholder-gray-400 focus:outline-none ${isHero
            ? 'pl-12 pr-12 py-4 text-base'
            : 'pl-10 pr-10 py-2.5 text-sm'
          }`}
          id="global-search-input"
        />
        {query && (
          <button
            onClick={() => { setQuery(''); setIsOpen(false); }}
            className={`absolute right-4 text-gray-400 hover:text-white transition-colors`}
          >
            <X className={isHero ? 'w-5 h-5' : 'w-4 h-4'} />
          </button>
        )}
      </div>

      {/* ── Dropdown Results ── */}
      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-brand-navy/95 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl z-50 overflow-hidden max-h-[400px] overflow-y-auto hide-scrollbar"
          >
            {results.map((item, idx) => (
              <button
                key={`${item.type}-${item.name}-${idx}`}
                onClick={() => handleSelect(item)}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-150 ${
                  idx === selectedIndex
                    ? 'bg-white/10'
                    : 'hover:bg-white/5'
                } ${idx !== results.length - 1 ? 'border-b border-white/5' : ''}`}
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  {getIcon(item.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">{item.name}</p>
                  <p className="text-gray-400 text-xs truncate">{item.subtitle}</p>
                </div>
                {getBadge(item.type)}
              </button>
            ))}
            <div className="px-4 py-2 bg-white/[0.03] border-t border-white/5">
              <p className="text-gray-500 text-[11px] text-center">
                Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-gray-300 text-[10px] font-mono">↑↓</kbd> to navigate · <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-gray-300 text-[10px] font-mono">Enter</kbd> to select
              </p>
            </div>
          </motion.div>
        )}

        {isOpen && query.length >= 2 && results.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute top-full left-0 right-0 mt-2 bg-brand-navy/95 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl z-50 p-6 text-center"
          >
            <Search className="w-8 h-8 text-gray-500 mx-auto mb-2" />
            <p className="text-gray-400 text-sm">No results found for "<span className="text-white">{query}</span>"</p>
            <p className="text-gray-500 text-xs mt-1">Try searching for a state name or destination</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;

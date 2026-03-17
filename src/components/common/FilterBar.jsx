import { motion } from 'framer-motion';

export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'temple', label: 'Temple', color: 'text-amber-400 bg-amber-400/10 border-amber-400/30' },
  { id: 'historical', label: 'Historical', color: 'text-purple-400 bg-purple-400/10 border-purple-400/30' },
  { id: 'wildlife', label: 'Wildlife', color: 'text-green-400 bg-green-400/10 border-green-400/30' },
  { id: 'nature', label: 'Nature', color: 'text-teal-400 bg-teal-400/10 border-teal-400/30' },
  { id: 'beach', label: 'Beach', color: 'text-blue-400 bg-blue-400/10 border-blue-400/30' },
  { id: 'hillstation', label: 'Hill Station', color: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30' },
  { id: 'cultural', label: 'Cultural', color: 'text-pink-400 bg-pink-400/10 border-pink-400/30' },
  { id: 'adventure', label: 'Adventure', color: 'text-orange-400 bg-orange-400/10 border-orange-400/30' },
  { id: 'hiddenGem', label: 'Hidden Gem', color: 'text-yellow-300 bg-yellow-300/10 border-yellow-300/30' }
];

export const getCategoryStyles = (categoryId) => {
  const category = CATEGORIES.find(c => c.id === categoryId);
  return category ? category.color : 'text-gray-400 bg-white/5 border-white/10';
};

const FilterBar = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="w-full overflow-x-auto pb-4 mb-6 hide-scrollbar">
      <div className="flex items-center gap-3 min-w-max px-1">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all border whitespace-nowrap ${
              activeCategory === cat.id
                ? 'bg-brand-orange text-white border-brand-orange shadow-[0_0_15px_rgba(249,115,22,0.4)]'
                : 'bg-brand-navy/60 backdrop-blur-md text-gray-300 border-white/10 hover:border-brand-cyan/50 hover:bg-white/5'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;

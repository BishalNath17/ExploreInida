import { Star, Quote } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { testimonials } from '../../data/testimonials';

const Testimonials = () => {
  return (
    <section className="py-20 bg-brand-navy px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Traveler Stories" 
          subtitle="See what explorers are saying about planning their trips with Explore India Smartly."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((review) => (
            <div key={review.id} className="glass-card p-8 rounded-2xl relative group hover:-translate-y-2 transition-transform duration-300">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-cyan/20 group-hover:text-brand-cyan/40 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
                  />
                ))}
              </div>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 italic">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-cyan/30"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&q=80'; e.target.onerror = null; }}
                />
                <div>
                  <h4 className="text-white font-bold text-sm">{review.name}</h4>
                  <p className="text-brand-cyan text-xs">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

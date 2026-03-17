import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import StateCard from '../states/StateCard';
import { statesData } from '../../data/statesData';

const StateExplorer = () => {
  // Take only first 8 states for the homepage preview
  const featuredStates = statesData.slice(0, 8);

  return (
    <section className="py-20 bg-brand-navy px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Explore Incredible India" 
          subtitle="From the snow-capped Himalayas to the tropical beaches of the south, every state has a unique story."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {featuredStates.map((state, index) => (
            <StateCard key={state.id} state={state} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/states" 
            className="inline-flex items-center justify-center px-8 py-3 glass-card hover:bg-white/20 text-white font-semibold rounded-full transition-colors"
          >
            View All 28 States & 8 UTs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StateExplorer;

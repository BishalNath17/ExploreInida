import { motion } from 'framer-motion';
import { Compass, Map, Shield, PiggyBank } from 'lucide-react';

const AboutCards = () => {
  const features = [
    {
      icon: <Compass className="w-8 h-8 text-brand-cyan" />,
      title: "Discover Destinations",
      description: "Explore the most famous and breathtaking locations across every Indian state."
    },
    {
      icon: <Map className="w-8 h-8 text-brand-cyan" />,
      title: "Find Hidden Gems",
      description: "Venture off the beaten path to explore lesser-known, pristine natural beauties."
    },
    {
      icon: <Shield className="w-8 h-8 text-brand-cyan" />,
      title: "Travel Safely",
      description: "Stay informed with state-specific safety tips, scam awareness, and emergency contacts."
    },
    {
      icon: <PiggyBank className="w-8 h-8 text-brand-cyan" />,
      title: "Plan Budget Smartly",
      description: "Get accurate estimates for accommodations, food, and travel styles tailored to you."
    }
  ];

  return (
    <section className="py-20 relative bg-brand-navy px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto -mt-32 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card hover:-translate-y-2 transition-transform duration-300 p-8 rounded-2xl flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCards;

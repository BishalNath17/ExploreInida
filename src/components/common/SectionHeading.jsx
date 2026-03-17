const SectionHeading = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto md:mx-0 ${centered ? 'mx-auto' : ''}">
          {subtitle}
        </p>
      )}
      <div className={`w-24 h-1 bg-brand-cyan rounded-full mt-6 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeading;

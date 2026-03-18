import './DestinationCard.css';
import LazyImage from './LazyImage';
import { MapPin } from 'lucide-react';

const DestinationCard = ({ destination, onClick }) => {
  if (!destination) return null;

  const { name, location, category, image, description } = destination;
  
  // Clean category name for styling badges
  const catKey = category ? category.toLowerCase().replace(/\s+/g, '') : 'default';
  const badgeClass = `badge-${catKey}`;

  // Simple override mapping from our DB category names to display labels 
  // (Optional semantic mapping)
  const categoryLabel = category || 'Location';

  return (
    <div className="dest-card" onClick={onClick}>
      <LazyImage 
        src={image} 
        alt={name} 
        category={category} 
      />
      
      <div className="dest-card__content">
        <span className={`dest-card__category ${badgeClass}`}>
          {categoryLabel}
        </span>
        
        <h4 className="dest-card__title">{name}</h4>
        
        <div className="dest-card__location">
          <MapPin size={16} className="shrink-0 mt-0.5" />
          <span>{location}</span>
        </div>
        
        {description && (
          <p className="dest-card__desc">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default DestinationCard;

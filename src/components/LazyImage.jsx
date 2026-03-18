import { useState, useEffect, useRef } from 'react';
import './DestinationCard.css';

/**
 * Automagically converts standard Wikipedia Commons images into thumbnails.
 * Fixes "hotlink protection blocked" or large 4K image loads.
 */
const convertWikiUrlToThumb = (url) => {
  if (!url || typeof url !== 'string') return url;
  
  if (!url.includes('wikimedia.org/wikipedia/commons/')) return url;
  if (url.includes('/thumb/')) return url; // Already processed

  // Matches the hash directories and filename, ex: /commons/9/9a/File.jpg
  const wikiRegex = /\/commons\/([a-f0-9]+)\/([a-f0-9]+)\/([^\/]+)$/i;
  const match = url.match(wikiRegex);

  if (match) {
    const [, hash1, hash2, filename] = match;
    // Creates format: /commons/thumb/h1/h2/File.jpg/600px-File.jpg
    return url.replace(
      /\/commons\/[a-f0-9]+\/[a-f0-9]+\/[^\/]+$/i,
      `/commons/thumb/${hash1}/${hash2}/${filename}/600px-${filename}`
    );
  }

  return url;
};

// Fallbacks as requested
const FALLBACKS = {
  cultural: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600',
  nature: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
  wildlife: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600',
  default: 'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?w=600'
};

const LazyImage = ({ src, alt, category, className = '', style = {} }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  // Parse safety checks
  const catKey = category ? category.toLowerCase() : 'default';
  const finalCategory = FALLBACKS[catKey] ? catKey : 'default';

  // Format wiki url
  const processedSrc = convertWikiUrlToThumb(src);

  const handleError = (e) => {
    if (!hasError) {
      setHasError(true);
      e.target.src = FALLBACKS[finalCategory];
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Preload when slightly offscreen
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="dest-card__image-wrap" ref={imgRef}>
      {/* Loading Skeleton block */}
      {!isLoaded && <div className="skeleton-shimmer"></div>}
      
      {/* Lazy render base on interaction */}
      {isInView && (
        <img
          src={hasError ? FALLBACKS[finalCategory] : processedSrc}
          alt={alt || "Destination"}
          className={`lazy-image ${isLoaded ? 'loaded' : ''} ${className}`}
          style={style}
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
};

export default LazyImage;

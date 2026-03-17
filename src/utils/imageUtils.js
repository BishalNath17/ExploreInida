/* ── Image Utilities ──────────────────────────────────────
   Reusable helpers for graceful fallbacks and duplicate prevention
   across all image-loading sections of the application.
   ────────────────────────────────────────────────────────── */

/* Themed fallback pools — used when a primary image fails to load.
   Each pool is curated to match the visual tone of its section. */
const VIRAL_FALLBACKS = [
  'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80', // India Gate sunset
  'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80', // Taj Mahal
  'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80', // Delhi cityscape
  'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80', // Varanasi ghats
];

const HIDDEN_FALLBACKS = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', // mountain serene
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80', // misty forest
  'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?w=800&q=80', // lake calm
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80', // scenic valley
];

/* Category-specific fallback images for state destinations */
const CATEGORY_FALLBACKS = {
  temple: [
    'https://images.unsplash.com/photo-1585135497273-1a86d9d9b7f0?w=800&q=80',
    'https://images.unsplash.com/photo-1621621973895-988c1a0f3964?w=800&q=80',
    'https://images.unsplash.com/photo-1590766740554-d6f7e887bb3e?w=800&q=80',
  ],
  historical: [
    'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
    'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80',
    'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80',
  ],
  wildlife: [
    'https://images.unsplash.com/photo-1615824996195-f780bba7cfab?w=800&q=80',
    'https://images.unsplash.com/photo-1535338454528-1b5a28f8ddab?w=800&q=80',
    'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80',
  ],
  nature: [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
    'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
  ],
  beach: [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80',
    'https://images.unsplash.com/photo-1476673160081-cf065bc4e32c?w=800&q=80',
  ],
  hillstation: [
    'https://images.unsplash.com/photo-1455156218388-5e61b526818b?w=800&q=80',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80',
  ],
  cultural: [
    'https://images.unsplash.com/photo-1567157577867-05ccb1388e13?w=800&q=80',
    'https://images.unsplash.com/photo-1590766740554-d6f7e887bb3e?w=800&q=80',
    'https://images.unsplash.com/photo-1532664189809-02133fee698d?w=800&q=80',
  ],
  adventure: [
    'https://images.unsplash.com/photo-1533692328991-08159ff19fca?w=800&q=80',
    'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
    'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80',
  ],
};

/* General India fallback — always works */
const GENERAL_FALLBACK = 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&h=600&fit=crop';

/* Hero image fallbacks — stunning wide Indian landscapes */
const HERO_FALLBACKS = [
  'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80',
  'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1600&q=80',
  'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1600&q=80',
  'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1600&q=80',
  'https://images.unsplash.com/photo-1548013146-72479768bada?w=1600&q=80',
  'https://images.unsplash.com/photo-1590050752117-238cb12bc4cc?w=1600&q=80',
];

let fallbackIdx = { viral: 0, hidden: 0, hero: 0, state: 0 };

/**
 * Returns an onError handler for <img> elements.
 * When a primary image fails, it swaps `src` to the next fallback
 * from the appropriate themed pool.
 *
 * @param {'viral'|'hidden'|'hero'|'state'} section – which fallback pool to use
 * @param {string} [category] – optional category for state destination images
 * @returns {function} – event handler for onError
 */
export const getImageErrorHandler = (section = 'viral', category) => (e) => {
  let pool;

  if (section === 'state' && category && CATEGORY_FALLBACKS[category]) {
    pool = CATEGORY_FALLBACKS[category];
  } else if (section === 'hidden') {
    pool = HIDDEN_FALLBACKS;
  } else if (section === 'hero') {
    pool = HERO_FALLBACKS;
  } else {
    pool = VIRAL_FALLBACKS;
  }

  const sectionKey = section in fallbackIdx ? section : 'viral';
  const idx = (fallbackIdx[sectionKey] || 0) % pool.length;
  e.target.src = pool[idx];
  e.target.onerror = null; // prevent infinite loop
  fallbackIdx[sectionKey] = (fallbackIdx[sectionKey] || 0) + 1;
};

/**
 * Runtime duplicate-image validator.
 * If two items in an array share the same `image` URL, the duplicate
 * is replaced with a fallback from the given pool.
 *
 * @param {Array} items – array of destination/gem objects with `image` key
 * @param {'viral'|'hidden'} section – which fallback pool to draw from
 * @returns {Array} – the same array, mutated in-place for convenience
 */
export const ensureUniqueImages = (items, section = 'viral') => {
  const seen = new Set();
  const pool = section === 'hidden' ? HIDDEN_FALLBACKS : VIRAL_FALLBACKS;
  let poolIdx = 0;

  return items.map((item) => {
    if (seen.has(item.image)) {
      // Replace the duplicate with a unique fallback
      const replacement = pool[poolIdx % pool.length];
      poolIdx++;
      return { ...item, image: replacement };
    }
    seen.add(item.image);
    return item;
  });
};

export { GENERAL_FALLBACK, HERO_FALLBACKS, CATEGORY_FALLBACKS };

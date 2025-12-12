/**
 * Image optimization utilities for responsive loading and performance.
 * Converts Unsplash URLs to optimized versions with size params.
 */

export const optimizeUnsplashUrl = (
  url: string,
  width: number = 400,
  quality: 'low' | 'medium' | 'high' = 'medium'
): string => {
  if (!url.includes('unsplash.com')) return url;

  const qualityMap = { low: 60, medium: 80, high: 95 };
  const params = new URLSearchParams({
    w: width.toString(),
    q: qualityMap[quality].toString(),
    auto: 'format',
    fit: 'crop',
    ixlib: 'rb-4.0.3',
  });

  return `${url.split('?')[0]}?${params.toString()}`;
};

/**
 * Returns responsive image srcset for different screen densities and sizes.
 */
export const generateImageSrcset = (
  baseUrl: string,
  sizes: number[] = [200, 400, 600]
): string => {
  return sizes
    .map(size => `${optimizeUnsplashUrl(baseUrl, size)} ${size}w`)
    .join(', ');
};

/**
 * Returns sizes attribute for responsive images.
 */
export const getImageSizesAttribute = (
  breakpoints: { mobile: string; tablet: string; desktop: string }
) => {
  return `(max-width: 640px) ${breakpoints.mobile}, (max-width: 1024px) ${breakpoints.tablet}, ${breakpoints.desktop}`;
};

/**
 * Placeholder image generator (lightweight SVG or data URL).
 */
export const createPlaceholderImage = (
  initials: string,
  color: string = '#10b981'
): string => {
  const svg = `
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="${color}"/>
      <text x="50%" y="50%" font-size="80" font-weight="bold" fill="white" text-anchor="middle" dy=".3em">
        ${initials}
      </text>
    </svg>
  `.trim();

  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

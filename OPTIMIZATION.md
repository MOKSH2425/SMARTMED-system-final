# Image & Asset Optimization Strategy

## Current Implementation

### Image Optimization (`src/lib/imageOptimization.ts`)
- **Unsplash URL optimization**: Converts image URLs to use appropriate query params (size, quality, format)
  - Reduces image size by specifying exact width + quality
  - Example: `photo-1544005313-94ddf0286df2` → `?w=120&q=80&auto=format`

### Lazy Loading
- Doctor card images use `loading="lazy"` attribute
- Images only load when visible in viewport, reducing initial page load
- Combined with optimized dimensions (120px for avatars)

### Performance Improvements
1. **Smaller image dimensions**: Doctor avatars are 64x64 CSS but fetch 120px source (2x density)
2. **Quality reduction**: Set to 'medium' (80% quality) for thumbnails, 'high' (95%) for full-size
3. **Lazy loading**: Defers offscreen image loading until needed
4. **SVG for icons**: Specialty icons use emojis/SVG (no image overhead)

## How to Use in Other Pages

### Import the utility
```tsx
import { optimizeUnsplashUrl } from '../../lib/imageOptimization';
```

### Use in img tags
```tsx
<img 
  src={optimizeUnsplashUrl(imageUrl, 200, 'medium')}
  loading="lazy"
  alt="description"
/>
```

### Parameters
- `imageUrl`: Full Unsplash URL (without query params)
- `width`: Pixel width to fetch (e.g., 120 for thumbnails, 400 for hero)
- `quality`: 'low' (60%), 'medium' (80%), 'high' (95%)

## Expected Performance
- **Doctor page**: ~6 images per page, ~50KB each → ~300KB total (lazy-loaded)
- **Landing page**: Illustration SVG (~5-10KB), no external images
- **Typical page**: 2-4 images at optimized sizes → <200KB

## Future Optimizations
1. **Image CDN**: Replace Unsplash with self-hosted optimized images
2. **WebP format**: Use modern format for additional compression
3. **Progressive JPEG**: For slower connections
4. **Image preloading**: Preload hero images with `rel="preload"`

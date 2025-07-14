# Hero Section Images

This folder contains the images displayed on the home screen hero section.

## How to Add Your Images

1. **Image Naming**: Name your images as `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`, etc., up to `hero-28.jpg`

2. **Image Format**: Use JPG, PNG, or WebP formats. The code expects `.jpg` by default, but you can modify the file extension in `src/components/HeroSection.js` if needed.

3. **Image Size**: Recommended dimensions are around 1170x780 pixels (3:2 aspect ratio) for best results.

4. **Total Images**: You need 28 images total for the complete grid (7 columns × 4 rows)

## Image Layout

The images will be arranged in a 4×7 grid with text overlays:

- **Row 1**: Images 1-7 (with "Food" text on position 3)
- **Row 2**: Images 8-14 (with "Sorted" text on position 5) 
- **Row 3**: Images 15-21 (with "Life" text on position 3)
- **Row 4**: Images 22-28 (with "Sorted" text on position 5)

## Fallback System

If any local image fails to load, the system will automatically fall back to the original Unsplash images. This ensures your website always displays properly even if some local images are missing.

## Tips

- Use high-quality food images that represent your brand
- Ensure images are optimized for web (compressed but good quality)
- Consider the color scheme and how text overlays will look on your images
- Test different images to see how they work with the sliding animation effects 
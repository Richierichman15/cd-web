# Preeminent Car Detailing Website

A modern, mobile-friendly single-page website for Preeminent Car Detailing featuring a premium design with full-screen background, responsive gallery, and interactive contact modal.

## Features

- **Full-Screen Background**: High-quality car detailing image with dark gradient overlay
- **Premium Logo Design**: Centered logo with stars, car silhouette, and elegant typography
- **Responsive Gallery**: 1-3 column grid that adapts to screen size
- **Interactive Lightbox**: Click gallery images to view in full-screen lightbox
- **Contact Modal**: "Book Now" button opens a professional contact form
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **Mobile Optimized**: Fully responsive design for all devices
- **Performance Optimized**: Lazy loading, debounced scroll events, and efficient animations

## Design Elements

- **Color Scheme**: Black, white, and gold accents
- **Typography**: Poppins font family for modern, clean look
- **Gold CTA Button**: Metallic gradient with hover animations and shine effect
- **Minimalist Design**: Clean, professional layout showcasing luxury car detailing

## Files Structure

```
├── index.html          # Main HTML file
├── style.css          # All CSS styles and responsive design
├── script.js          # JavaScript for interactivity
├── README.md          # This documentation
└── public/            # Static assets (if needed)
```

## Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with flexbox, grid, and animations
- **Vanilla JavaScript**: No frameworks, lightweight and fast
- **Google Fonts**: Poppins font family
- **Unsplash Images**: High-quality stock photos for gallery

## Key Features Implementation

### 1. Full-Screen Background
- Fixed background image with parallax scrolling
- Dark gradient overlay (40% opacity) for text readability
- Responsive background attachment

### 2. Logo Section
- SVG car silhouette with drop shadow
- Animated twinkling stars
- Elegant typography with letter spacing
- Centered in top half of viewport

### 3. Responsive Gallery
- CSS Grid with auto-fit columns (1-3 based on screen width)
- Hover effects with image scaling
- Lazy loading for performance
- Intersection Observer for scroll animations

### 4. Contact Modal
- Professional contact form with validation
- Smooth slide-in animation
- Form submission handling
- Success/error notifications

### 5. Lightbox Gallery
- Full-screen image viewing
- Keyboard navigation (arrow keys, escape)
- Previous/next buttons
- Click outside to close

### 6. Performance Optimizations
- Lazy loading for images
- Debounced scroll events
- CSS will-change properties
- Reduced motion support for accessibility

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Mobile Responsiveness

- Breakpoints: 480px, 768px, 1024px
- Touch-friendly interactions
- Optimized images for mobile
- Responsive typography scaling

## Accessibility Features

- Semantic HTML structure
- Keyboard navigation support
- Focus indicators
- Reduced motion support
- Screen reader friendly

## Usage

1. Open `index.html` in a web browser
2. Navigate through the page using smooth scrolling
3. Click gallery images to view in lightbox
4. Click "Book Now" to open contact modal
5. Fill out the contact form to request an appointment

## Customization

### Changing Background Image
Update the background-image URL in `style.css`:
```css
.background-image {
    background-image: url('your-image-url-here');
}
```

### Adding Gallery Images
Add new gallery items in `index.html`:
```html
<div class="gallery-item" data-type="image">
    <img src="your-image-url" alt="Description" loading="lazy">
    <div class="gallery-overlay">
        <span class="gallery-icon">🔍</span>
    </div>
</div>
```

### Modifying Contact Form
Update form fields in the modal section of `index.html` and corresponding JavaScript validation in `script.js`.

## Performance Notes

- Images are lazy-loaded for faster initial page load
- CSS animations use transform and opacity for GPU acceleration
- JavaScript uses event delegation and debouncing
- Minimal external dependencies for fast loading

## Future Enhancements

- Backend integration for form submissions
- CMS integration for easy content management
- Video support in gallery
- Advanced filtering for gallery images
- Multi-language support
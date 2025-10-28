import Image from 'next/image'
import './globals.css'

export default function Home() {
  return (
    <div className="main-container">
      {/* Background Image with Dark Overlay */}
      <div className="background-overlay">
        <div className="background-image"></div>
        <div className="dark-gradient"></div>
      </div>

      {/* Logo Section - Centered in Top Half */}
      <section className="logo-section" id="home">
        <div className="logo-container">
          <div className="logo">
            {/* Stars */}
            <div className="stars">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            
            {/* Car Silhouette */}
            <div className="car-silhouette">
              <svg viewBox="0 0 100 50" className="car-icon">
                <path d="M20 25 L30 15 L70 15 L80 25 L75 35 L25 35 Z" fill="white" stroke="white" strokeWidth="1"/>
                <circle cx="25" cy="40" r="5" fill="white"/>
                <circle cx="75" cy="40" r="5" fill="white"/>
              </svg>
            </div>
            
            {/* Company Name */}
            <h1 className="company-name">PREEMINENT</h1>
            <div className="tagline-container">
              <span className="tagline">CAR DETAILING</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section" id="gallery">
        <div className="container">
          <h2 className="section-title">Before & After Transformations</h2>
          <p className="section-subtitle">See the dramatic difference our professional detailing makes</p>
          <div className="gallery-grid">
            {/* Before and After Car Detailing Transformations */}
            <div className="gallery-item" data-type="image">
              <Image 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop" 
                alt="Dirty Car Interior with Stains - Before Detailing" 
                width={800}
                height={600}
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-icon">🔍</span>
                <span className="gallery-label">Before</span>
              </div>
            </div>
            <div className="gallery-item" data-type="image">
              <Image 
                src="https://images.unsplash.com/photo-1549924231-f129b911e442?w=800&h=600&fit=crop" 
                alt="Clean Car Interior - After Professional Detailing" 
                width={800}
                height={600}
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-icon">🔍</span>
                <span className="gallery-label">After</span>
              </div>
            </div>
            <div className="gallery-item" data-type="image">
              <Image 
                src="https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&h=600&fit=crop" 
                alt="Dirty Car Seats with Spills - Before Cleaning" 
                width={800}
                height={600}
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-icon">🔍</span>
                <span className="gallery-label">Before</span>
              </div>
            </div>
            <div className="gallery-item" data-type="image">
              <Image 
                src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=600&fit=crop" 
                alt="Spotless Car Seats - After Deep Cleaning" 
                width={800}
                height={600}
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-icon">🔍</span>
                <span className="gallery-label">After</span>
              </div>
            </div>
            <div className="gallery-item" data-type="image">
              <Image 
                src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop" 
                alt="Dirty Car Dashboard and Console - Before Detailing" 
                width={800}
                height={600}
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-icon">🔍</span>
                <span className="gallery-label">Before</span>
              </div>
            </div>
            <div className="gallery-item" data-type="image">
              <Image 
                src="https://images.unsplash.com/photo-1617531653332-4b0d0b0b0b0b?w=800&h=600&fit=crop" 
                alt="Polished Car Dashboard - After Professional Detailing" 
                width={800}
                height={600}
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-icon">🔍</span>
                <span className="gallery-label">After</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section" id="contact">
        <div className="container">
          <button className="book-now-btn" id="bookNowBtn">
            <span className="btn-text">Book Now</span>
            <span className="btn-shine"></span>
          </button>
        </div>
      </section>
    </div>
  )
}

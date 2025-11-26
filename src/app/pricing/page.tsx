'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import '../globals.css'

export default function Pricing() {
  useEffect(() => {
    // Initialize other functionality from external script
    const script = document.createElement('script');
    script.src = '/script.js';
    script.async = true;
    document.body.appendChild(script);
    
    // Ensure background video plays
    const video = document.querySelector('.background-video') as HTMLVideoElement;
    if (video) {
      video.play().catch(err => {
        console.log('Video autoplay prevented:', err);
      });
    }
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const pricingTiers = [
    {
      name: 'Bronze',
      color: '#CD7F32',
      description: 'Perfect for regular maintenance and keeping your vehicle looking clean. Ideal for vehicles that need a quick refresh.',
      features: [
        'Exterior wash and dry',
        'Tire and wheel cleaning',
        'Dashboard wipe down',
        'Vacuum interior',
        'Window cleaning'
      ]
    },
    {
      name: 'Silver',
      color: '#C0C0C0',
      description: 'A step up with deeper cleaning and protection. Great for vehicles that need more attention to detail.',
      features: [
        'Everything in Bronze',
        'Interior deep vacuum',
        'Leather/vinyl conditioning',
        'Exterior wax application',
        'Door jamb cleaning',
        'Air freshener treatment'
      ]
    },
    {
      name: 'Gold',
      color: '#FFD700',
      description: 'Premium detailing service with comprehensive cleaning and protection. Perfect for maintaining your vehicle\'s value.',
      features: [
        'Everything in Silver',
        'Clay bar treatment',
        'Paint protection polish',
        'Interior steam cleaning',
        'Engine bay cleaning',
        'Headlight restoration',
        'Trim restoration'
      ]
    },
    {
      name: 'Platinum',
      color: '#E5E4E2',
      description: 'Our most comprehensive service. Complete transformation with premium products and meticulous attention to every detail.',
      features: [
        'Everything in Gold',
        'Full paint correction',
        'Ceramic coating application',
        'Interior deep sanitization',
        'Carpet shampoo and extraction',
        'Full engine detail',
        'Paint protection film consultation',
        '1-year maintenance plan included'
      ]
    }
  ];

  return (
    <div className="main-container">
      {/* Background Video with Dark Overlay */}
      <div className="background-overlay">
        <video 
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/images/video.mp4" type="video/mp4" />
        </video>
        <div className="background-image"></div>
        <div className="dark-gradient"></div>
      </div>

      {/* Navigation */}
      <nav className="main-nav">
        <div className="nav-container">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/pricing" className="nav-link active">Pricing</Link>
        </div>
      </nav>

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

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <h2 className="section-title">Our Pricing Tiers</h2>
          <p className="section-subtitle">Choose the perfect package for your vehicle</p>
          
          <div className="pricing-grid">
            {pricingTiers.map((tier, index) => (
              <div key={tier.name} className="pricing-card" style={{ '--tier-color': tier.color } as React.CSSProperties}>
                <div className="pricing-header">
                  <div className="pricing-badge" style={{ backgroundColor: tier.color }}>
                    {tier.name}
                  </div>
                </div>
                <div className="pricing-body">
                  <p className="pricing-description">{tier.description}</p>
                  <ul className="pricing-features">
                    {tier.features.map((feature, idx) => (
                      <li key={idx}>
                        <span className="feature-icon">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pricing-footer">
                  <Link href="/" className="pricing-btn">
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3 className="footer-logo">PREEMINENT</h3>
              <p className="footer-tagline">Professional Car Detailing</p>
            </div>
            <div className="footer-links">
              <a 
                href="https://linktr.ee/Preeminent.Detailing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-linktree-link"
              >
                <span className="linktree-icon">🔗</span>
                <span className="linktree-text">Connect With Us</span>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Preeminent Detailing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}


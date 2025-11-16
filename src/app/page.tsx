'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import './globals.css'

export default function Home() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('');
  const [showAppointmentDetails, setShowAppointmentDetails] = useState(false);

  // Month names
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  // Day names
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const openCalendar = () => {
    setIsCalendarOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeCalendar = () => {
    setIsCalendarOpen(false);
    setShowAppointmentDetails(false);
    setSelectedDate(null);
    setSelectedTime('');
    setSelectedAddress('');
    document.body.style.overflow = 'auto';
  };

  const closeContact = () => {
    setIsContactOpen(false);
    document.body.style.overflow = 'auto';
  };

  const selectDate = (date: Date) => {
    setSelectedDate(date);
    setShowAppointmentDetails(true);
    setSelectedTime('');
    setSelectedAddress('');
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day other-month"></div>);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const isDisabled = date < today;
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
      
      days.push(
        <div
          key={day}
          className={`calendar-day ${isDisabled ? 'disabled' : ''} ${isSelected ? 'selected' : ''}`}
          onClick={() => !isDisabled && selectDate(date)}
        >
          {day}
        </div>
      );
    }
    
    return days;
  };

  const continueToContact = () => {
    if (selectedDate && selectedTime && selectedAddress) {
      setIsCalendarOpen(false);
      setIsContactOpen(true);
    }
  };

  const backToCalendar = () => {
    setShowAppointmentDetails(false);
    setSelectedDate(null);
  };

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
          <Link href="/" className="nav-link active">Home</Link>
          <Link href="/pricing" className="nav-link">Pricing</Link>
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

      {/* Gallery Section */}
      <section className="gallery-section" id="gallery">
        <div className="container">
          <h2 className="section-title">Before & After Transformations</h2>
          <p className="section-subtitle">See the dramatic difference our professional detailing makes</p>
          <div className="gallery-grid">
            {/* Before and After Car Detailing Transformations */}
            <div className="gallery-item" data-type="image">
              <Image 
                src="/images/before.PNG" 
                alt="Dirty Car Interior - Before Detailing" 
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
                src="/images/after.PNG" 
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
                src="/images/bna.PNG" 
                alt="Before and After Comparison - Car Detailing" 
                width={800}
                height={600}
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-icon">🔍</span>
                <span className="gallery-label">Comparison</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="cta-section" id="contact">
        <div className="container">
          <button className="book-now-btn" onClick={openCalendar}>
            <span className="btn-text">Book Now</span>
            <span className="btn-shine"></span>
          </button>
        </div>
      </section>

      {/* Calendar Modal */}
      {isCalendarOpen && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && closeCalendar()}>
          <div className="modal-content calendar-modal">
            <div className="modal-header">
              <h3>Select Appointment Date</h3>
              <button className="modal-close" onClick={closeCalendar}>&times;</button>
            </div>
            <div className="calendar-container">
              <div className="calendar-header">
                <button className="calendar-nav" onClick={() => navigateMonth('prev')}>&lt;</button>
                <h4>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h4>
                <button className="calendar-nav" onClick={() => navigateMonth('next')}>&gt;</button>
              </div>
              <div className="calendar-grid">
                {dayNames.map(day => (
                  <div key={day} className="calendar-day-header">{day}</div>
                ))}
                {renderCalendar()}
              </div>
            </div>
            
            {/* Time and Address Selection */}
            {showAppointmentDetails && selectedDate && (
              <div className="appointment-details">
                <div className="selected-date">
                  <h4>Selected Date: {selectedDate.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</h4>
                </div>
                
                <div className="form-group">
                  <label htmlFor="appointmentTime">Select Time *</label>
                  <select 
                    id="appointmentTime" 
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    required
                  >
                    <option value="">Choose a time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="appointmentAddress">Service Location *</label>
                  <select 
                    id="appointmentAddress" 
                    value={selectedAddress}
                    onChange={(e) => setSelectedAddress(e.target.value)}
                    required
                  >
                    <option value="">Choose location</option>
                    <option value="mobile">Mobile Service (We come to you)</option>
                    <option value="shop">Our Shop Location</option>
                  </select>
                </div>
                
                <div className="appointment-actions">
                  <button type="button" className="back-btn" onClick={backToCalendar}>Back to Calendar</button>
                  <button 
                    type="button" 
                    className="continue-btn" 
                    onClick={continueToContact}
                    disabled={!selectedTime || !selectedAddress}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && closeContact()}>
          <div className="modal-content">
            <div className="modal-header">
              <h3>Complete Your Booking</h3>
              <button className="modal-close" onClick={closeContact}>&times;</button>
            </div>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              {selectedDate && selectedTime && selectedAddress && (
                <div className="appointment-summary">
                  <h4>Appointment Details</h4>
                  <div className="summary-item">
                    <strong>Date:</strong> {selectedDate.toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="summary-item">
                    <strong>Time:</strong> {selectedTime === '09:00' ? '9:00 AM' : 
                      selectedTime === '10:00' ? '10:00 AM' :
                      selectedTime === '11:00' ? '11:00 AM' :
                      selectedTime === '12:00' ? '12:00 PM' :
                      selectedTime === '13:00' ? '1:00 PM' :
                      selectedTime === '14:00' ? '2:00 PM' :
                      selectedTime === '15:00' ? '3:00 PM' :
                      selectedTime === '16:00' ? '4:00 PM' :
                      selectedTime === '17:00' ? '5:00 PM' : selectedTime}
                  </div>
                  <div className="summary-item">
                    <strong>Location:</strong> {selectedAddress === 'mobile' ? 'Mobile Service (We come to you)' : 'Our Shop Location'}
                  </div>
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={4} placeholder="Tell us about your vehicle and preferred services..."></textarea>
              </div>
              <button type="submit" className="submit-btn">Book Appointment</button>
            </form>
          </div>
        </div>
      )}

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

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Preeminent Car Detailing | Premium Car Detailing Services',
  description: 'Premium car detailing services for your vehicle. Book your appointment today and experience the difference.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        
        {/* Calendar Modal */}
        <div className="modal-overlay" id="calendarModal">
          <div className="modal-content calendar-modal">
            <div className="modal-header">
              <h3>Select Appointment Date</h3>
              <button className="modal-close" id="closeCalendarModal">&times;</button>
            </div>
            <div className="calendar-container">
              <div className="calendar-header">
                <button className="calendar-nav" id="prevMonth">&lt;</button>
                <h4 id="currentMonth"></h4>
                <button className="calendar-nav" id="nextMonth">&gt;</button>
              </div>
              <div className="calendar-grid" id="calendarGrid">
                {/* Calendar days will be populated by JavaScript */}
              </div>
            </div>
            
            {/* Time and Address Selection (hidden initially) */}
            <div className="appointment-details" id="appointmentDetails" style={{display: 'none'}}>
              <div className="selected-date">
                <h4>Selected Date: <span id="selectedDateText"></span></h4>
              </div>
              
              <div className="form-group">
                <label htmlFor="appointmentTime">Select Time *</label>
                <select id="appointmentTime" name="time" required>
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
                <select id="appointmentAddress" name="address" required>
                  <option value="">Choose location</option>
                  <option value="mobile">Mobile Service (We come to you)</option>
                  <option value="shop">Our Shop Location</option>
                </select>
              </div>
              
              <div className="appointment-actions">
                <button type="button" className="back-btn" id="backToCalendar">Back to Calendar</button>
                <button type="button" className="continue-btn" id="continueToContact">Continue</button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Modal */}
        <div className="modal-overlay" id="contactModal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Complete Your Booking</h3>
              <button className="modal-close" id="closeModal">&times;</button>
            </div>
            <form className="contact-form" id="contactForm">
              <div className="appointment-summary" id="appointmentSummary" style={{display: 'none'}}>
                <h4>Appointment Details</h4>
                <div className="summary-item">
                  <strong>Date:</strong> <span id="summaryDate"></span>
                </div>
                <div className="summary-item">
                  <strong>Time:</strong> <span id="summaryTime"></span>
                </div>
                <div className="summary-item">
                  <strong>Location:</strong> <span id="summaryLocation"></span>
                </div>
              </div>
              
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

        {/* Lightbox Modal */}
        <div className="lightbox-overlay" id="lightboxModal">
          <div className="lightbox-content">
            <button className="lightbox-close" id="closeLightbox">&times;</button>
            <button className="lightbox-prev" id="prevBtn">‹</button>
            <button className="lightbox-next" id="nextBtn">›</button>
            <img id="lightboxImage" src="/images/before.PNG" alt="Gallery image" />
          </div>
        </div>

        {/* JavaScript */}
        <script 
          src="/script.js" 
          async
          suppressHydrationWarning
        ></script>
      </body>
    </html>
  )
}

// Preeminent Car Detailing - Interactive JavaScript
// Handles modal functionality, lightbox, smooth scrolling, and form submission

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initModal();
    initCalendar();
    initLightbox();
    initSmoothScroll();
    initFormSubmission();
    initScrollAnimations();
});

// Modal functionality for contact form
function initModal() {
    const bookNowBtn = document.getElementById('bookNowBtn');
    const calendarModal = document.getElementById('calendarModal');
    const contactModal = document.getElementById('contactModal');
    const closeCalendarModal = document.getElementById('closeCalendarModal');
    const closeModal = document.getElementById('closeModal');
    
    // Open calendar modal when Book Now button is clicked
    bookNowBtn.addEventListener('click', function() {
        calendarModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
    
    // Close calendar modal when close button is clicked
    closeCalendarModal.addEventListener('click', function() {
        calendarModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close contact modal when close button is clicked
    closeModal.addEventListener('click', function() {
        contactModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close calendar modal when clicking outside the modal content
    calendarModal.addEventListener('click', function(e) {
        if (e.target === calendarModal) {
            calendarModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close contact modal when clicking outside the modal content
    contactModal.addEventListener('click', function(e) {
        if (e.target === contactModal) {
            contactModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modals with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (calendarModal.classList.contains('active')) {
                calendarModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            } else if (contactModal.classList.contains('active')) {
                contactModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
    });
}

// Calendar functionality
function initCalendar() {
    let currentDate = new Date();
    let selectedDate = null;
    let selectedTime = '';
    let selectedAddress = '';
    
    const calendarGrid = document.getElementById('calendarGrid');
    const currentMonthElement = document.getElementById('currentMonth');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    const appointmentDetails = document.getElementById('appointmentDetails');
    const selectedDateText = document.getElementById('selectedDateText');
    const appointmentTime = document.getElementById('appointmentTime');
    const appointmentAddress = document.getElementById('appointmentAddress');
    const backToCalendarBtn = document.getElementById('backToCalendar');
    const continueBtn = document.getElementById('continueToContact');
    
    // Month names
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    // Day names
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    // Initialize calendar
    function renderCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        
        currentMonthElement.textContent = `${monthNames[month]} ${year}`;
        
        // Clear calendar grid
        calendarGrid.innerHTML = '';
        
        // Add day headers
        dayNames.forEach(day => {
            const dayHeader = document.createElement('div');
            dayHeader.className = 'calendar-day-header';
            dayHeader.textContent = day;
            calendarGrid.appendChild(dayHeader);
        });
        
        // Get first day of month and number of days
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();
        
        // Add empty cells for days before the first day of the month
        for (let i = 0; i < startingDayOfWeek; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'calendar-day other-month';
            emptyDay.textContent = '';
            calendarGrid.appendChild(emptyDay);
        }
        
        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.textContent = day;
            
            const date = new Date(year, month, day);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            // Disable past dates
            if (date < today) {
                dayElement.classList.add('disabled');
            } else {
                dayElement.addEventListener('click', function() {
                    selectDate(date, dayElement);
                });
            }
            
            calendarGrid.appendChild(dayElement);
        }
    }
    
    // Select date function
    function selectDate(date, element) {
        // Remove previous selection
        const previousSelected = calendarGrid.querySelector('.calendar-day.selected');
        if (previousSelected) {
            previousSelected.classList.remove('selected');
        }
        
        // Add selection to clicked element
        element.classList.add('selected');
        selectedDate = date;
        
        // Show appointment details
        appointmentDetails.style.display = 'block';
        selectedDateText.textContent = date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // Reset time and address selections
        appointmentTime.value = '';
        appointmentAddress.value = '';
        selectedTime = '';
        selectedAddress = '';
        updateContinueButton();
    }
    
    // Update continue button state
    function updateContinueButton() {
        const isValid = selectedTime && selectedAddress;
        continueBtn.disabled = !isValid;
    }
    
    // Navigation event listeners
    prevMonthBtn.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });
    
    nextMonthBtn.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });
    
    // Time selection
    appointmentTime.addEventListener('change', function() {
        selectedTime = this.value;
        updateContinueButton();
    });
    
    // Address selection
    appointmentAddress.addEventListener('change', function() {
        selectedAddress = this.value;
        updateContinueButton();
    });
    
    // Back to calendar
    backToCalendarBtn.addEventListener('click', function() {
        appointmentDetails.style.display = 'none';
        const selectedDay = calendarGrid.querySelector('.calendar-day.selected');
        if (selectedDay) {
            selectedDay.classList.remove('selected');
        }
        selectedDate = null;
    });
    
    // Continue to contact form
    continueBtn.addEventListener('click', function() {
        if (selectedDate && selectedTime && selectedAddress) {
            // Close calendar modal
            const calendarModal = document.getElementById('calendarModal');
            calendarModal.classList.remove('active');
            
            // Open contact modal with appointment details
            const contactModal = document.getElementById('contactModal');
            const appointmentSummary = document.getElementById('appointmentSummary');
            const summaryDate = document.getElementById('summaryDate');
            const summaryTime = document.getElementById('summaryTime');
            const summaryLocation = document.getElementById('summaryLocation');
            
            // Populate summary
            summaryDate.textContent = selectedDate.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            const timeText = appointmentTime.options[appointmentTime.selectedIndex].text;
            summaryTime.textContent = timeText;
            
            const locationText = appointmentAddress.options[appointmentAddress.selectedIndex].text;
            summaryLocation.textContent = locationText;
            
            // Show summary
            appointmentSummary.style.display = 'block';
            
            // Open contact modal
            contactModal.classList.add('active');
        }
    });
    
    // Initialize calendar
    renderCalendar();
}

// Lightbox functionality for gallery images
function initLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImage = document.getElementById('lightboxImage');
    const closeLightbox = document.getElementById('closeLightbox');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentImageIndex = 0;
    let galleryImages = [];
    
    // Collect all gallery images
    galleryItems.forEach((item, index) => {
        const img = item.querySelector('img');
        if (img) {
            galleryImages.push({
                src: img.src,
                alt: img.alt
            });
            
            // Add click event to each gallery item
            item.addEventListener('click', function() {
                currentImageIndex = index;
                openLightbox();
            });
        }
    });
    
    function openLightbox() {
        if (galleryImages[currentImageIndex]) {
            lightboxImage.src = galleryImages[currentImageIndex].src;
            lightboxImage.alt = galleryImages[currentImageIndex].alt;
            lightboxModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    function closeLightboxModal() {
        lightboxModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        lightboxImage.src = galleryImages[currentImageIndex].src;
        lightboxImage.alt = galleryImages[currentImageIndex].alt;
    }
    
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        lightboxImage.src = galleryImages[currentImageIndex].src;
        lightboxImage.alt = galleryImages[currentImageIndex].alt;
    }
    
    // Event listeners for lightbox controls
    closeLightbox.addEventListener('click', closeLightboxModal);
    nextBtn.addEventListener('click', showNextImage);
    prevBtn.addEventListener('click', showPrevImage);
    
    // Close lightbox when clicking outside the image
    lightboxModal.addEventListener('click', function(e) {
        if (e.target === lightboxModal) {
            closeLightboxModal();
        }
    });
    
    // Keyboard navigation for lightbox
    document.addEventListener('keydown', function(e) {
        if (lightboxModal.classList.contains('active')) {
            switch(e.key) {
                case 'Escape':
                    closeLightboxModal();
                    break;
                case 'ArrowRight':
                    showNextImage();
                    break;
                case 'ArrowLeft':
                    showPrevImage();
                    break;
            }
        }
    });
}

// Smooth scrolling for navigation
function initSmoothScroll() {
    // Add smooth scrolling to any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Form submission handling
function initFormSubmission() {
    const contactForm = document.getElementById('contactForm');
    const contactModal = document.getElementById('contactModal');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            message: formData.get('message')
        };
        
        // Get appointment details from summary
        const summaryDate = document.getElementById('summaryDate');
        const summaryTime = document.getElementById('summaryTime');
        const summaryLocation = document.getElementById('summaryLocation');
        
        const appointmentData = {
            date: summaryDate ? summaryDate.textContent : '',
            time: summaryTime ? summaryTime.textContent : '',
            location: summaryLocation ? summaryLocation.textContent : ''
        };
        
        // Validate form data
        if (!data.name || !data.phone || !data.email) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        // Validate appointment data
        if (!appointmentData.date || !appointmentData.time || !appointmentData.location) {
            showNotification('Please complete the appointment selection first.', 'error');
            return;
        }
        
        // Simulate form submission (replace with actual API call)
        const appointmentMessage = `Appointment Details:\nDate: ${appointmentData.date}\nTime: ${appointmentData.time}\nLocation: ${appointmentData.location}\n\nCustomer Details:\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nMessage: ${data.message || 'No additional message'}`;
        
        console.log('Appointment Booking:', appointmentMessage);
        
        showNotification('Thank you! Your appointment has been booked successfully. We\'ll contact you soon to confirm.', 'success');
        
        // Reset form and close modal
        contactForm.reset();
        const appointmentSummary = document.getElementById('appointmentSummary');
        if (appointmentSummary) {
            appointmentSummary.style.display = 'none';
        }
        
        setTimeout(() => {
            contactModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }, 3000);
    });
}

// Scroll animations for elements
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe gallery items for animation
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
}

// Notification system for user feedback
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#F44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 1002;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add animation keyframes if not already added
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Auto-remove notification after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Lazy loading for gallery images
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', initLazyLoading);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add scroll-based animations with debouncing
const debouncedScrollHandler = debounce(() => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.background-image');
    
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add loading state for better UX
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add fade-in animation to main content
    const mainContent = document.querySelector('.main-container');
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            mainContent.style.opacity = '1';
        }, 100);
    }
});

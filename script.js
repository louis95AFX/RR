// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.querySelector('form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const date = document.getElementById('date').value;
            
            // Construct WhatsApp message
            const message = `Hi RR Mobile Shine,\n\nI'd like to book a ${service} for ${date}.\n\nName: ${name}\nPhone: ${phone}\n\nPlease confirm availability.`;
            
            // Encode for URL
            const encodedMessage = encodeURIComponent(message);
            
            // Redirect to WhatsApp
            window.location.href = `https://wa.me/27659400314?text=${encodedMessage}`;
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});
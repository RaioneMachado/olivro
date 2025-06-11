document.addEventListener('DOMContentLoaded', function() {
    // Countdown Timer
    function updateCountdown() {
        const now = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        
        const diff = tomorrow - now;
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    setInterval(updateCountdown, 1000);
    updateCountdown();
    
    // Scroll animations
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.content-item, .bonus-item, .testimonial-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    const animatedElements = document.querySelectorAll('.content-item, .bonus-item, .testimonial-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease-out';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
    
    // Fake "last copies" counter
    function updateLastCopies() {
        const elements = document.querySelectorAll('.limited-offer, .last-copy');
        let count = 27;
        
        setInterval(() => {
            if (count > 0) {
                count -= Math.floor(Math.random() * 3) + 1;
                if (count < 0) count = 0;
                
                elements.forEach(el => {
                    if (el.classList.contains('limited-offer')) {
                        el.innerHTML = `<i class="fas fa-fire"></i> ÚLTIMAS ${count} CÓPIAS DISPONÍVEIS!`;
                    } else {
                        el.innerHTML = `<i class="fas fa-bolt"></i> ATENÇÃO: Restam apenas ${count} cópias com desconto!`;
                    }
                });
            }
        }, 15000);
    }
    
    updateLastCopies();
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add pulse animation to CTA buttons periodically
    setInterval(() => {
        const ctaButtons = document.querySelectorAll('.cta-button');
        ctaButtons.forEach(button => {
            button.classList.remove('pulse');
            void button.offsetWidth; // Trigger reflow
            button.classList.add('pulse');
        });
    }, 4000);
    
// Fake visitor counter
const visitorCount = Math.floor(Math.random() * 100) + 50;
const visitorElement = document.createElement('div');
visitorElement.className = 'visitor-counter';
visitorElement.innerHTML = `<i class="fas fa-users"></i> ${visitorCount} pessoas estão vendo esta página agora`;

// Estilos (melhor movê-los para o CSS)
Object.assign(visitorElement.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    background: 'rgba(10, 10, 10, 0.8)',
    padding: '10px 15px',
    borderRadius: '5px',
    fontSize: '0.9rem',
    borderLeft: '3px solid var(--primary-color)',
    zIndex: '1000',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
});

document.body.appendChild(visitorElement);

// Update visitor count randomly
setInterval(() => {
    const currentText = visitorElement.textContent || visitorElement.innerText;
    const currentCount = parseInt(currentText.match(/\d+/)[0]) || visitorCount;
    const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
    const newCount = Math.max(1, currentCount + change);
    visitorElement.innerHTML = `<i class="fas fa-users"></i> ${newCount} pessoas estão vendo esta página agora`;
}, 5000);
}
);
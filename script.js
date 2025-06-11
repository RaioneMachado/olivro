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

document.addEventListener('DOMContentLoaded', function() {
    // Efeito de digitação no título (opcional)
    const title = document.querySelector('.persuasive-content h2');
    if (title) {
        const originalText = title.textContent;
        title.textContent = '';
        
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < originalText.length) {
                title.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 50);
    }
    
    // Efeito de hover nas balas
    const bulletItems = document.querySelectorAll('.bullet-item');
    bulletItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('.bullet-icon');
            if (icon) {
                icon.textContent = '→';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('.bullet-icon');
            if (icon) {
                icon.textContent = '✧';
            }
        });
    });
    
    // Efeito no botão CTA
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            ctaButton.textContent = 'REDIRECIONANDO...';
            ctaButton.style.background = 'linear-gradient(to bottom, #990000, #660000)';
            
            // Simular redirecionamento após 1.5 segundos
            setTimeout(() => {
                // Substitua pela URL real de checkout
                window.location.href = '#link-de-compra';
            }, 1500);
        });
    }
});

// Contador Regressivo
function updateCountdown() {
    const now = new Date();
    const hours = 23 - now.getHours();
    const minutes = 59 - now.getMinutes();
    const seconds = 59 - now.getSeconds();
    
    document.getElementById('countdown-hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('countdown-minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('countdown-seconds').textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Efeito de Cursor Seguindo o Botão
document.addEventListener('mousemove', (e) => {
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        const rect = ctaButton.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ctaButton.style.setProperty('--mouse-x', `${x}px`);
        ctaButton.style.setProperty('--mouse-y', `${y}px`);
    }
});

// Efeito de Scroll para a seção CTA
function smoothScrollToCTA() {
    const ctaSection = document.getElementById('cta');
    if (ctaSection) {
        ctaSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Destaque na seção
        ctaSection.style.boxShadow = '0 0 50px rgba(204, 40, 39, 0.8)';
        setTimeout(() => {
            ctaSection.style.boxShadow = 'none';
        }, 2000);
    }
}

// Efeito de inclinação nos itens (usando a biblioteca vanilla-tilt.js)
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa o efeito de inclinação
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".content-item"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
            scale: 1.03
        });
    }
    
    // Efeito de revelação sequencial
    const contentItems = document.querySelectorAll('.content-item');
    contentItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 150 * index);
    });
    
    // Efeito de digitação no subtítulo
    const subtitle = document.querySelector('.section-subtitle');
    if (subtitle) {
        const originalText = subtitle.innerHTML;
        subtitle.innerHTML = '';
        
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < originalText.length) {
                subtitle.innerHTML += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 20);
    }
});

// Tente isso no console para testar
document.querySelectorAll('*').forEach(el => {
    el.style.transition = 'none !important';
    el.style.animation = 'none !important';
});
// Interactive background effects
document.addEventListener('DOMContentLoaded', () => {
    // Background parallax effect
    document.addEventListener('mousemove', (e) => {
        // Calculate mouse position in percentages
        const mouseX = (e.clientX / window.innerWidth) * 100;
        const mouseY = (e.clientY / window.innerHeight) * 100;

        // Update CSS variables for background effects
        document.documentElement.style.setProperty('--mouse-x', `${mouseX}%`);
        document.documentElement.style.setProperty('--mouse-y', `${mouseY}%`);

        // Add parallax effect to sections with reduced intensity
        const sections = document.querySelectorAll('.about, .projects, .internships, .contact');
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const moveX = (e.clientX - centerX) * 0.005; // Reduced from 0.01
            const moveY = (e.clientY - centerY) * 0.005; // Reduced from 0.01
            
            section.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });

    // Add particles effect
    function createParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        document.body.appendChild(particlesContainer);

        for (let i = 0; i < 30; i++) { // Reduced from 50 for better performance
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.setProperty('--x', `${Math.random() * 100}%`);
            particle.style.setProperty('--y', `${Math.random() * 100}%`);
            particle.style.setProperty('--duration', `${Math.random() * 20 + 10}s`);
            particle.style.setProperty('--delay', `${Math.random() * 10}s`);
            particlesContainer.appendChild(particle);
        }
    }

    // Initialize particles with a slight delay
    setTimeout(createParticles, 1000);

    // Smooth scroll for navigation links
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
});

// Handle visibility change to pause animations when tab is not visible
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.body.classList.add('pause-animations');
    } else {
        document.body.classList.remove('pause-animations');
    }
});

function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Random size between 1-3px
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    // Random starting position
    star.style.left = `${Math.random() * 100}%`;
    
    // Random horizontal offset for falling motion
    const xOffset = (Math.random() - 0.5) * 100; // Random offset between -50px and 50px
    star.style.setProperty('--x-offset', `${xOffset}px`);
    
    // Random duration between 3-7 seconds
    const duration = Math.random() * 4 + 3;
    star.style.setProperty('--twinkle-duration', `${duration}s`);
    
    // Random delay
    star.style.animationDelay = `${Math.random() * 5}s`;
    
    stars.appendChild(star);
    
    // Remove star after animation
    star.addEventListener('animationend', () => {
        star.remove();
    });
} 
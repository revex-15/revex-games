// ===========================
// 🎨 Theme Toggle Function
// ===========================
function toggleTheme() {
    const body = document.body;
    const themeButton = document.querySelector('.theme-toggle');

    body.classList.toggle('dark');

    // Update button emoji
    if (body.classList.contains('dark')) {
        themeButton.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeButton.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
}

// Load saved theme preference
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const themeButton = document.querySelector('.theme-toggle');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        themeButton.textContent = '☀️';
    }
});

// ===========================
// 📱 Mobile Menu Toggle
// ===========================
function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}

// Close menu when clicking outside on mobile
document.addEventListener('click', (e) => {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');

    if (window.innerWidth <= 768) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    }
});

// ===========================
// 🔍 Search Functionality
// ===========================
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const gameCards = document.querySelectorAll('.game-card');

        gameCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();

            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// ===========================
// 🎯 Smooth Navigation
// ===========================
// Add smooth scroll behavior for navigation links
document.querySelectorAll('.sidebar nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Close mobile menu after navigation
            if (window.innerWidth <= 768) {
                document.querySelector('.sidebar').classList.remove('open');
            }
        }
    });
});

// ===========================
// 🎊 Confetti Effect
// ===========================
function createConfetti(x, y) {
    const colors = ['#dbff66', '#b5f347', '#eaffaa', '#f5576c', '#43e97b', '#ffd676'];

    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${x}px;
            top: ${y}px;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
        `;

        document.body.appendChild(confetti);

        const angle = (Math.PI * 2 * i) / 30;
        const velocity = 5 + Math.random() * 5;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;

        let posX = x;
        let posY = y;
        let opacity = 1;

        const animation = setInterval(() => {
            posX += vx;
            posY += vy + 2; // gravity
            opacity -= 0.02;

            confetti.style.left = posX + 'px';
            confetti.style.top = posY + 'px';
            confetti.style.opacity = opacity;

            if (opacity <= 0) {
                clearInterval(animation);
                confetti.remove();
            }
        }, 20);
    }
}

// Add confetti to play buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('play-button') && !e.target.disabled) {
        createConfetti(e.clientX, e.clientY);
    }
});

// ===========================
// 📧 Email Functionality
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    const emailDisplay = document.getElementById('email-display');
    if (emailDisplay) {
        emailDisplay.style.cursor = 'pointer';

        emailDisplay.addEventListener('click', function() {
            const user = 'jsambhav572';
            const domain = 'gmail';
            const tld = 'com';
            const email = user + '@' + domain + '.' + tld;
            window.location.href = 'mai' + 'lto:' + email;
        });

        emailDisplay.title = 'Click to send email';
    }
});

// ===========================
// 🎮 Welcome Message
// ===========================
window.addEventListener('load', () => {
    console.log('🎮 Welcome to the coolest website ever! 🎮');
    console.log('💡 Fun fact: All emojis are now perfectly visible! 😎');
});

// ===========================
// 🌈 Easter Egg: Konami Code
// ===========================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiSequence.join(',')) {
        document.body.style.animation = 'rainbow 2s linear infinite';

        // Create notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0);
            color: white;
            padding: 2rem 3rem;
            border-radius: 20px;
            font-size: 1.5rem;
            font-weight: bold;
            z-index: 10000;
            text-align: center;
            animation: pulse 1s ease infinite;
        `;
        notification.innerHTML = '🌈 RAINBOW MODE ACTIVATED! 🌈';
        document.body.appendChild(notification);

        setTimeout(() => notification.remove(), 3000);

        const rainbowStyle = document.createElement('style');
        rainbowStyle.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
            @keyframes pulse {
                0%, 100% { transform: translate(-50%, -50%) scale(1); }
                50% { transform: translate(-50%, -50%) scale(1.1); }
            }
        `;
        document.head.appendChild(rainbowStyle);
    }
});

console.log('💡 Tip: Try the Konami code for a surprise! (↑ ↑ ↓ ↓ ← → ← → B A)');

// Smooth scrolling to games section
function scrollToGames() {
    document.getElementById('games').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Edit About Me section
function editAbout() {
    const aboutContent = document.querySelector('.about-content');
    const currentText = aboutContent.querySelector('p:first-of-type').nextElementSibling;

    const funListItems = aboutContent.querySelectorAll('.fun-list li');
    const listTexts = Array.from(funListItems).map(li => li.textContent);

    // Create a simple prompt-based editor
    const newTitle = prompt('What should the title say?', 'Hey! I\'m a 10-year-old Game Creator!');
    if (newTitle) {
        aboutContent.querySelector('h3').textContent = newTitle;
    }

    const newIntro = prompt('Write something cool about yourself:', 'I love making games and having fun! Here\'s some cool stuff about me:');
    if (newIntro) {
        aboutContent.querySelector('p:first-of-type').textContent = newIntro;
    }

    // Edit list items
    alert('Now let\'s edit your cool facts! Click OK to continue.');
    funListItems.forEach((li, index) => {
        const newText = prompt(`Edit fact #${index + 1}:`, li.textContent);
        if (newText) {
            li.textContent = newText;
        }
    });

    showNotification('About Me section updated! 🎉');
}

// Play game (placeholder)
function playGame(gameName) {
    alert(`Get ready to play ${gameName}! 🎮\n\n(This is where you'd link to your actual game)`);
}

// Edit contact info
function editContact() {
    const contactCard = document.querySelector('.contact-card p:first-child');
    const newContact = prompt('Add your contact information (with parent permission!):', contactCard.textContent);

    if (newContact) {
        contactCard.textContent = newContact;
        showNotification('Contact info updated! 📬');
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: linear-gradient(45deg, #43e97b, #38f9d7);
        color: white;
        padding: 20px 30px;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        font-weight: bold;
        font-size: 1.1em;
        z-index: 1000;
        animation: slideInRight 0.5s ease;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add smooth scroll behavior for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add some fun confetti effect on button clicks
function createConfetti(x, y) {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#43e97b', '#ffd676'];

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
    if (e.target.classList.contains('play-button')) {
        createConfetti(e.clientX, e.clientY);
    }
});

// Add floating animation to game cards on load
window.addEventListener('load', () => {
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Show welcome message
    setTimeout(() => {
        showNotification('Welcome to my awesome website! 🎉');
    }, 1000);
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiSequence.join(',')) {
        document.body.style.animation = 'rainbow 2s linear infinite';
        showNotification('🌈 RAINBOW MODE ACTIVATED! 🌈');

        const rainbowStyle = document.createElement('style');
        rainbowStyle.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(rainbowStyle);
    }
});

console.log('🎮 Welcome to the coolest website ever! 🎮');
console.log('💡 Tip: Try the Konami code for a surprise! (↑ ↑ ↓ ↓ ← → ← → B A)');

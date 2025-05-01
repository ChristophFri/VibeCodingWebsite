document.addEventListener('DOMContentLoaded', () => {
    console.log('Thierry website loaded successfully!');

    // Generate more instances dynamically to approach 1000 repetitions
    generateMoreContent();
    
    // Random position for the floating elements
    const floatingElements = document.querySelectorAll('.floating');
    floatingElements.forEach(element => {
        element.style.left = `${Math.random() * 90}%`;
        element.style.top = `${Math.random() * 70}%`;
    });

    // Make grid items interactive
    const gridItems = document.querySelectorAll('.grid-item, .mosaic-item');
    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.color = getRandomColor();
        });
        
        item.addEventListener('click', () => {
            item.style.transform = 'scale(1.1) rotate(' + (Math.random() * 10 - 5) + 'deg)';
            item.style.transition = 'transform 0.3s';
            setTimeout(() => {
                item.style.transform = 'scale(1)';
            }, 500);
        });
    });

    // Add scroll animation
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollY > sectionTop - window.innerHeight / 1.5 && 
                scrollY < sectionTop + sectionHeight) {
                section.classList.add('animate');
            }
        });
    });
    
    // Create a typing effect for one element
    if (document.querySelector('.banner-text')) {
        const text = "Hey Sexy Boy Thierry";
        const bannerText = document.querySelector('.banner-text');
        typeEffect(bannerText, text);
    }
    
    // Add random confetti effect
    setInterval(() => {
        if (Math.random() > 0.9) {
            createConfetti();
        }
    }, 3000);
});

// Generate more content to approach 1000 instances
function generateMoreContent() {
    // Add 100 more grid items
    const repeatingGrid = document.querySelector('.repeating-grid');
    if (repeatingGrid) {
        for (let i = 0; i < 100; i++) {
            const div = document.createElement('div');
            div.className = 'grid-item';
            div.textContent = 'Hey Sexy Boy Thierry';
            repeatingGrid.appendChild(div);
        }
    }
    
    // Add 100 more mosaic items
    const gridMosaic = document.querySelector('.grid-mosaic');
    if (gridMosaic) {
        for (let i = 0; i < 100; i++) {
            const div = document.createElement('div');
            div.className = 'mosaic-item';
            div.textContent = 'Hey Sexy Boy Thierry';
            div.style.backgroundColor = getRandomDarkColor();
            gridMosaic.appendChild(div);
        }
    }
    
    // Create a new massive text section with 200 more instances
    const main = document.querySelector('main');
    if (main) {
        const massiveSection = document.createElement('section');
        massiveSection.className = 'massive-text-section';
        
        for (let i = 0; i < 200; i++) {
            const div = document.createElement('div');
            div.className = 'massive-text';
            div.textContent = 'Hey Sexy Boy Thierry';
            div.style.fontSize = `${0.5 + Math.random() * 1.5}rem`;
            div.style.opacity = 0.1 + Math.random() * 0.9;
            div.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;
            div.style.color = getRandomColor();
            massiveSection.appendChild(div);
        }
        
        main.appendChild(massiveSection);
    }
    
    // Create a word cloud section with 100 more instances
    if (main) {
        const wordCloudSection = document.createElement('section');
        wordCloudSection.className = 'word-cloud-section';
        
        for (let i = 0; i < 100; i++) {
            const div = document.createElement('div');
            div.className = 'word-cloud-item';
            div.textContent = 'Hey Sexy Boy Thierry';
            div.style.fontSize = `${0.7 + Math.random() * 2}rem`;
            div.style.fontWeight = Math.random() > 0.5 ? 'bold' : 'normal';
            div.style.position = 'absolute';
            div.style.left = `${Math.random() * 90}%`;
            div.style.top = `${Math.random() * 90}%`;
            div.style.transform = `rotate(${Math.random() * 360}deg)`;
            div.style.color = getRandomColor();
            div.style.opacity = 0.4 + Math.random() * 0.6;
            wordCloudSection.appendChild(div);
        }
        
        main.appendChild(wordCloudSection);
    }
}

// Helper functions
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomDarkColor() {
    const r = Math.floor(Math.random() * 100);
    const g = Math.floor(Math.random() * 100);
    const b = Math.floor(Math.random() * 100);
    return `rgb(${r}, ${g}, ${b})`;
}

function typeEffect(element, text) {
    element.textContent = "";
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, 150);
        } else {
            setTimeout(() => {
                element.textContent = "";
                i = 0;
                type();
            }, 2000);
        }
    }
    
    type();
}

function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti-container';
    document.body.appendChild(confettiContainer);
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = `${Math.random() * 10 + 5}px`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confettiContainer.appendChild(confetti);
    }
    
    setTimeout(() => {
        document.body.removeChild(confettiContainer);
    }, 5000);
}

// Add styles for dynamic elements
const style = document.createElement('style');
style.textContent = `
    .massive-text-section {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 2rem;
        background-color: #222;
        overflow: hidden;
        min-height: 500px;
        position: relative;
    }
    
    .massive-text {
        margin: 5px;
        padding: 5px;
        transition: all 0.3s;
    }
    
    .massive-text:hover {
        transform: scale(1.2) !important;
        z-index: 10;
    }
    
    .word-cloud-section {
        position: relative;
        height: 500px;
        background-color: #111;
        overflow: hidden;
    }
    
    .word-cloud-item {
        transition: all 0.5s;
    }
    
    .word-cloud-item:hover {
        transform: scale(1.5) !important;
        z-index: 10;
    }
    
    .confetti-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
        overflow: hidden;
    }
    
    .confetti {
        position: absolute;
        top: -10px;
        animation: fall linear forwards;
    }
    
    @keyframes fall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
    
    section.animate {
        animation: fadeInUp 1s forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

document.head.appendChild(style); 
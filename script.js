// Photo slideshow animation
function rotateProfilePictures() {
    const profilePics = document.querySelectorAll('.profile-picture');
    const activePic = document.querySelector('.profile-picture.active');
    const nextIndex = (Array.from(profilePics).indexOf(activePic) + 1) % profilePics.length;
    
    activePic.classList.remove('active');
    profilePics[nextIndex].classList.add('active');
}

// Set interval for photo rotation
setInterval(rotateProfilePictures, 3000);

// Fade-in animation on scroll
function handleScrollAnimation() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', handleScrollAnimation);

// Trigger once on load
window.addEventListener('load', () => {
    handleScrollAnimation();
});
 // Create random dots in the background
 const dotsContainer = document.getElementById('dots');
 const numDots = 30;
 
 for (let i = 0; i < numDots; i++) {
     const dot = document.createElement('div');
     dot.classList.add('dot');
     
     // Random size between 5 and 15px
     const size = Math.random() * 10 + 5;
     dot.style.width = `${size}px`;
     dot.style.height = `${size}px`;
     
     // Random position
     dot.style.left = `${Math.random() * 100}%`;
     dot.style.top = `${Math.random() * 100}%`;
     
     dotsContainer.appendChild(dot);
 }
  // Repeat the animation cycle
  setInterval(() => {
    const titles = document.querySelectorAll('.hidden-title');
    titles.forEach(title => {
        title.style.animation = 'none';
        setTimeout(() => {
            const fadeStyle = getComputedStyle(title);
            const fadeDuration = fadeStyle.getPropertyValue('--fade-duration') || '1s';
            title.style.animation = `revealText 1s forwards, hideText ${fadeDuration} forwards`;
            title.style.animationDelay = `${fadeStyle.getPropertyValue('--delay')}, ${fadeStyle.getPropertyValue('--hide-delay')}`;
            title.style.animationFillMode = 'forwards, forwards';
        }, 10);
    });
}, 12000); // Repeat every 12 seconds to accommodate slower fades
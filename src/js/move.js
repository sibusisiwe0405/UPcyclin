// Get a reference to the polaroid element
const polaroid = document.querySelector('.polaroid');

// Define the animation using GSAP
gsap.to(polaroid, {
    x: 100,    // Move the polaroid 100 pixels to the right
    y: 100,    // Move the polaroid 100 pixels down
    rotation: 10,  // Rotate the polaroid by 10 degrees
    duration: 2,  // Animation duration in seconds
    ease: 'power1.inOut', // Easing function for a smooth motion
    repeat: -1, // Repeat the animation indefinitely
    yoyo: true // Reverse the animation on each repeat
});

// Add a click event listener to pause and resume the animation
polaroid.addEventListener('click', () => {
    if (gsap.isTweening(polaroid)) {
        gsap.pause();
    } else {
        gsap.resume();
    }
});

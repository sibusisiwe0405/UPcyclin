// Get a reference to the polaroid element
const polaroid = document.querySelector(".polaroid");
// Define the animation using GSAP
gsap.to(polaroid, {
    x: 100,
    y: 100,
    rotation: 10,
    duration: 2,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true // Reverse the animation on each repeat
});
// Add a click event listener to pause and resume the animation
polaroid.addEventListener("click", ()=>{
    if (gsap.isTweening(polaroid)) gsap.pause();
    else gsap.resume();
});

//# sourceMappingURL=index.22fb9fe7.js.map

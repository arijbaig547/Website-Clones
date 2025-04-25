// GSAP with ScrollTrigger for animating the GIF when it comes into view
gsap.registerPlugin(ScrollTrigger);

gsap.to(".parallax-gif", {
  opacity: 1, // Make the GIF visible when in view
  y: -100, // Move the GIF up while scrolling
  duration: 2, // Duration of the animation
  ease: "power2.out", // Ease for smoothness
  scrollTrigger: {
    trigger: ".parallax-container", // Target the parallax container
    start: "top 80%", // Start animation when 80% of the container is in view
    end: "bottom 20%", // End when 20% of the container is in view
    scrub: true, // Smooth animation based on scroll position
    markers: true // Enable markers to see start and end points (optional for debugging)
  }
});

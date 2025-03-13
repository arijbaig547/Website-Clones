window.onload = function() {
    gsap.fromTo("body", 
        { opacity: 0 },  // From (initial state)
        { opacity: 1, duration: 3.0, ease: "power2.out" } // To (final state)
    );
};


gsap.fromTo(
  ".image img", // Targeting all `<img>` elements
  { x: -60, opacity: 0 }, // Initial position (off-screen)
  {
    x: 0,
    opacity: 1,
    duration: 2,
    ease: "power2.out",
    scrub:1,
    scrollTrigger: {
      trigger: ".image img", // Animation starts when `img` enters viewport
      start: "top 80%", // Starts when the top of `img` reaches 80% of the viewport
      end:"bottom 30%",
      toggleActions: "play none none none" // Runs once when triggered
    }
  }
);
gsap.fromTo(
  ".filterimg img", // Targeting all `<img>` elements
  { x: 60, opacity: 0 }, // Initial position (off-screen)
  {
    x: 0,
    opacity: 1,
    duration: 2,
    ease: "power2.out",
    scrub:1,
    scrollTrigger: {
      trigger: ".filterimg img", // Animation starts when `img` enters viewport
      start: "top 60%", // Starts when the top of `img` reaches 80% of the viewport
      toggleActions: "play none none none" // Runs once when triggered
    }
  }
);


gsap.fromTo(
    ".videosection", // Targeting image
    { x: -30, opacity: 0 }, // Start state
    { 
        x: 0, 
        opacity: 1, 
        duration: 2, 
        ease: "power2.out",
        scrub:1,
        scrollTrigger: {
            trigger: ".videosection", // The element that triggers the animation
            start: "top 80%", // When the top of img reaches 80% of viewport
            end: "top 50%", // Ends when the top reaches 50% of viewport
            scrub: true, // Smooth scrolling effect
        }
    }
);

gsap.fromTo(
    ".item-img", // Targeting image
    { y: -60, opacity: 0 }, // Start state
    { 
        y: 0, 
        opacity: 1, 
        duration: 2, 
        ease: "power2.out",
        scrub:1,
        scrollTrigger: {
            trigger: ".explore", // The element that triggers the animation
            start: "top 70%", // When the top of img reaches 80% of viewport
            end: "top 50%", // Ends when the top reaches 50% of viewport
            scrub: true, // Smooth scrolling effect
        }
    }
);
gsap.fromTo(
    ".questions", // Targeting image
    { x: -60, opacity: 0 }, // Start state
    { 
        x: 0, 
        opacity: 1, 
        duration: 2, 
        ease: "power2.out",
        scrub:1,
        scrollTrigger: {
            trigger: ".questions", // The element that triggers the animation
            start: "top 80%", // When the top of img reaches 80% of viewport
            end: "top 50%", // Ends when the top reaches 50% of viewport
            scrub: true, // Smooth scrolling effect
        }
    }
);
gsap.fromTo(
    ".questionimg img", // Targeting image
    { y: -60, opacity: 0 }, // Start state
    { 
        y: 0, 
        opacity: 1, 
        duration: 2, 
        ease: "power2.out",
        scrub:1,
        scrollTrigger: {
            trigger: ".questionimg img", // The element that triggers the animation
            start: "top 80%", // When the top of img reaches 80% of viewport
            end: "top 50%", // Ends when the top reaches 50% of viewport
            scrub: true, // Smooth scrolling effect
        }
    }
);


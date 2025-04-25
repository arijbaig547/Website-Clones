gsap.registerPlugin(ScrollTrigger);


gsap.to(".header-image img", {
    y: -20, // Image will move 300px to the left
    x:-20,
    duration: 3, // Animation duration
    ease: "power1.inOut", // Smooth easing for better visual effect
});

console.log("Script is running");

let img = document.querySelector(".header-image img"); // Select the single image

img.addEventListener("mouseenter", function () {
    gsap.to(img, {
        y: -20, // Float up slightly
        x:-10,
       rotationY:10,
        rotationX: 5, // Tilt slightly on X-axis
        transformPerspective: 1000, // Perspective for 3D effect
        ease: 'power1.out',
        duration: 0.5 // Smooth transition
    });
});

img.addEventListener('mouseleave', () => {
    gsap.to(img, {
      y: 0, // Reset to original position
      rotationY: 0, // Reset Y-axis tilt
      rotationX: 0, // Reset X-axis tilt
      x:0,
      transformPerspective: 1000,
      ease: 'power1.out',
      duration: 0.5
    });
  });

  gsap.to(".moon img", {
    y: -100, // Slight vertical movement
    scale:1.5,

    duration: 3,
    scrollTrigger: {
        trigger: "#Explore", // Target the Explore section
        start: "top right", // When the top of the section enters the bottom of the viewport
        end: "bottom right", // When the bottom of the section leaves the top of the viewport
        scrub: true, // Smooth scroll-based animation
        markers: false, // Disable markers (optional)
    }
})

gsap.to("#Explore h1", {

    x: -150,
    scale:2,
    duration: 10,
    scrollTrigger: {
        trigger: "#Explore",
        start: "top right", // When the top of the #Explore section hits the center of the viewport
        end: "bottom top", // When the bottom of the #Explore section hits the top of the viewport
        scrub: true, // Smooth scroll-based animation
    }
});
gsap.fromTo(
    ".gallery h2", // The element to animate
    {
      opacity: 0, // Start invisible
      y: 50, // Start 50px below its normal position
    },
    {
      opacity: 1, // Fully visible
      y: 0, // Move to its normal position
      duration: 1, // Animation duration
      ease: "power2.out", // Smooth easing effect
      scrollTrigger: {
        trigger: ".gallery h2", // Corrected trigger to ".gallery h2"
        start: "top 80%", // Start when the top of ".gallery h2" reaches 80% of the viewport
      },
    }
  );


gsap.to(".card img",{
    x:-70,
    y:-20,
    duration:5,
    ease:"power1.inOut",
    scrollTrigger:{
        trigger:"#Explore",
        start:"top left",
        end:"bottom left",
        scrub:true
    }
})
gsap.to(".card h1,.card p",{
    x:70,
    y:-50,
    duration:5,
    ease:"power1.inOut",
    scrollTrigger:{
        trigger:"#Explore",
        start:"top bottom",
        end:"right center",
        scrub:true
    }
})

gsap.fromTo(
    ".gallery-text p",
    {
        opacity:0,
        y:50,
    },
    {
    opacity:1,
    x:10,
    y:-50,
    duration:3,
    ease:"power1.inOut",
    scrollTrigger:{
        trigger:".gallery-text p",
        start:"top bottom",
        end:"center bottom",
        scrub:true
    }
})

gsap.fromTo(
    ".contact-img img",
    {
        opacity:0,
        y:50,
    },
    {
    opacity:1,
    x:100,
    y:0,
    duration:5,
    ease:"power1.inOut",
    scrollTrigger:{
        trigger:".contact-img img",
        start:"top bottom",
        end:"right center",
        scrub:true
    }
})


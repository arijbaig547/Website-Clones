gsap.registerPlugin(ScrollTrigger)


gsap.fromTo(".welcome-text",
  { opacity: 0, x: -30 }, // Starting state
  { 
    opacity: 1, x: 0, duration: 2,
    scrub:true
  }
);

gsap.fromTo(".discover-text",
  { opacity: 0, x: -30 }, // Starting state
  { 
    opacity: 1, x: 0, duration: 2,
    scrollTrigger: { 
      trigger: ".story", 
      start: "top 100%", 
      end: "bottom 50%", 
      scrub: true 
    }
  }
);
gsap.fromTo(".discover-img img",
  { opacity: 0, y: 60 }, // Starting state
  { 
    opacity: 1, y: 0, duration: 2,
    scrollTrigger: { 
      trigger: ".story", 
      start: "top 80%", 
      end: "bottom 50%", 
      scrub: true 
    }
  }
);
gsap.fromTo(".opening-text h1",
  { opacity: 0, y: 60 }, // Starting state
  { 
    opacity: 1, y: 0, duration: 2,
    scrollTrigger: { 
      trigger: ".hours", 
      start: "top 80%", 
      end: "bottom 50%", 
      scrub: true 
    }
  }
);
gsap.fromTo(".timings h3",
  { opacity: 0, x: -60 }, // Starting state
  { 
    opacity: 1, x: 0, duration: 1,
    scrollTrigger: { 
      trigger: ".hours", 
      start: "top 80%", 
      end: "bottom 20%", 
      scrub: true 
    }
  }
);
gsap.fromTo(".timings h5",
  { opacity: 0, y: -60 }, // Starting state
  { 
    opacity: 1, y: 0, duration: 2,
    scrollTrigger: { 
      trigger: ".hours", 
      start: "top 80%", 
      end: "bottom 20%", 
      scrub: true 
    }
  }
);
gsap.fromTo(
  ".chef",
  { opacity: 0, y: -60, scale: 1 }, // Starting state
  { 
    opacity: 1, y: 0, scale: 1, duration: 1, 
    stagger: 0.3,
    scrollTrigger: { 
      trigger: ".team", 
      start: "top 50%", 
      end: "bottom 90%", 
      scrub: true 
    }
  }
);




gsap.fromTo(".menu",
  { opacity: 0, x: -100 }, // Starting state
  { 
    opacity: 1, x: 0, duration: 1,
    scrollTrigger: { 
      trigger: ".menu", 
      start: "top 80%", 
      end: "bottom 50%", 
      scrub: true 
    }
  }
);
gsap.fromTo(".menu-items",
  {opacity:0,y: 100 }, // Starting state
  { 
    opacity:1,y: 0, duration: 2,
    scrollTrigger: { 
      trigger: ".menu-items", 
      start: "top 80%", 
      end: "bottom 90%", 
      scrub: true 
    }
  }
);
gsap.fromTo(".gallery-banner",
  { opacity: 0, y: -100 }, // Starting state
  { 
    opacity: 1, y: 0, duration: 1,
    scrollTrigger: { 
      trigger: ".gallery-banner", 
      start: "top 80%", 
      end: "bottom 50%", 
 
    }
  }
);
gsap.fromTo(".onlinereservation-banner",
  { opacity: 0, y: -100 }, // Starting state
  { 
    opacity: 1, y: 0, duration: 1,
    scrollTrigger: { 
      trigger: ".onlinereservation-banner", 
      start: "top 80%", 
      end: "bottom 50%", 
      scrub: true 
    }
  }
);
gsap.fromTo(".gallery",
  { opacity: 0, y: -70 }, // Starting state
  { 
    opacity: 1, y: 0, duration: 1,
    scrollTrigger: { 
      trigger: ".gallery", 
      start: "top 60%", 
      end: "bottom 80%", 
      scrub: true 
    }
  }
);
gsap.fromTo(".deals h5,.deals h6",
  { opacity: 0, x: -100 }, // Starting state
  { 
    opacity: 1, x: 0, duration: 1,
    scrollTrigger: { 
      trigger: ".deals", 
      start: "top 80%", 
      end: "bottom 70%", 
      scrub: true 
    }
  }
);
// 

if(window.innerWidth<="420px"){
  gsap.fromTo(".gallery-banner",
    { y: -100 }, // Starting state
    { 
      opacity: 1, y: 0, duration: 0.5,
      scrollTrigger: { 
        trigger: ".gallery-banner", 
        start: "top 80%", 
        end: "bottom 50%", 

      }
    }
  );
}

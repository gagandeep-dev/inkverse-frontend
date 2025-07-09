// Register plugin
gsap.registerPlugin(ScrollTrigger);

// HEADER Animation Timeline
const headerTL = gsap.timeline();
headerTL.from(".header", {
  y: -80,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
})
.from(".header-part-1 h1", {
  x: -30,
  opacity: 0,
  duration: 0.8
}, "-=0.6")
.from(".header button", {
  opacity: 0,
  y: -20,
  stagger: 0.1,
  duration: 0.6,
  ease: "power2.out"
}, "-=0.4");

// HERO Section Timeline
const heroTL = gsap.timeline();
heroTL.from(".hero h1", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out"
})
.from(".hero p", {
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "power2.out"
}, "-=0.6")
.from("#cta", {
  opacity: 0,
  scale: 0.9,
  duration: 1,
  ease: "back.out(1.7)"
}, "-=0.8");

// TRENDING Cards Scroll Trigger
// TRENDING Cards – Eye-Catching Animation
gsap.from(".card", {
  scrollTrigger: {
    trigger: ".trending",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 100,
  scale: 0.8,
  rotateX: 15,
  transformOrigin: "center center",
  stagger: {
    each: 0.15,
    from: "center"
  },
  duration: 1.2,
  ease: "back.out(1.8)"
});


// SERVICES Grid Cards
gsap.from(".services-card", {
  scrollTrigger: {
    trigger: ".services",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  scale: 0.95,
  y: 30,
  stagger: 0.2,
  duration: 0.8,
  ease: "power3.out"
});

// BESTSELLERS Cards
gsap.from(".bestsellers-card", {
  scrollTrigger: {
    trigger: ".bestsellers",
    start: "top 85%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  x: -50,
  stagger: 0.2,
  duration: 1,
  ease: "power2.out"
});

// NEWSLETTER Section
gsap.from(".newsletter h1", {
  scrollTrigger: {
    trigger: ".newsletter",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".email-input", {
  scrollTrigger: {
    trigger: ".newsletter",
    start: "top 75%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  scale: 0.95,
  duration: 1,
  ease: "back.out(1.7)",
  delay: 0.2
});

// FOOTER
gsap.from(".footer-part-1, .footer-part-2", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 85%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  ease: "power3.out"
});

gsap.from(".final-footer h3", {
  scrollTrigger: {
    trigger: ".final-footer",
    start: "top 90%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "power2.out"
});

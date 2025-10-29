gsap.registerPlugin(ScrollTrigger);

// animate each event-card as user scrolls
gsap.from(".event-card", {
  scrollTrigger: {
    trigger: ".focus-areas",
    start: "top 30%",  // when top of focus-areas hits 80% of viewport
    toggleActions: "play none none none"
  },
  opacity: 0,
  y: 50,          // start 50px below
  scale: 0.8,     // slightly smaller
  duration: 4.8,
  stagger: 0.2,   // animate each card one after another
  ease: "power2.out"
});
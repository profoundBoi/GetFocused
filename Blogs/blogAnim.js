document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  // Master timeline for entrance
  const tl = gsap.timeline({
    defaults: { ease: "power3.out", duration: 1.2 }
  });

  // Animate page heading and search bar first
  tl.from("h1", { y: -80, opacity: 0 })
    .from("#package-search", { scale: 0.8, opacity: 0, duration: 0.8 }, "-=0.6");

  // Animate packages in sequence with a wave motion
  gsap.utils.toArray(".package-card").forEach((card, i) => {
    const pathAmplitude = 80; // how far the motion path sways horizontally

    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      duration: 1.4,
      delay: i * 0.1,
      motionPath: {
        path: [
          { x: -pathAmplitude, y: 80 },
          { x: 0, y: 0 }
        ],
        curviness: 1.5
      },
      ease: "power2.out"
    });
  });

  // Footer fade-in animation
  gsap.from("footer", {
    scrollTrigger: {
      trigger: "footer",
      start: "top 90%",
      toggleActions: "play none none reverse"
    },
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });
});
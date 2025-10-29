document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const sections = document.querySelectorAll(".service-section");

  sections.forEach((section, i) => {
    const content = section.querySelector(".service-content");

    // Start hidden and rotated like a film roll
    gsap.set(section, {
      opacity: 0,
      rotateX: i % 2 === 0 ? -45 : 45,
      transformOrigin: "center top",
      clipPath: "inset(50% 0 50% 0)",
    });

    // Animate the section roll
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        end: "bottom 60%",
        scrub: true,
      },
      opacity: 1,
      rotateX: 0,
      clipPath: "inset(0% 0 0% 0)",
      ease: "power3.out",
      duration: 1.5,
    });

    // Animate inner content for depth
    gsap.from(content, {
      scrollTrigger: {
        trigger: section,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
      y: 80,
      opacity: 0,
      rotateZ: i % 2 === 0 ? -2 : 2,
      duration: 1.2,
      ease: "expo.out",
      delay: 0.2,
    });
  });
});